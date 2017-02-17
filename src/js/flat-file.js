/*
 * loads what is defined in data-markdown path and renders it
 */

$(document).ready(
	function(){

		var $main = $('[data-markdown]'); // main content element

		/*
		 * Navigation
		 */

		// Load menu
		$('.c-menu').load('/lekce/_menu.html');

		var $nextChapter = '';

		// set current menu item
		$(document).ajaxComplete(function(event, xhr, settings){
			if (settings.url === '/lekce/_menu.html'){

				var $menuLinks = $('.menu a');

				$menuLinks.each(function(i){
					if ($(this).attr('href') == window.location.pathname){
						$(this).addClass('is-active');
						// generate title
						$('title').text($(this).text() + ': ' + $('title').text());

						// set next chapter
						if (i + 1 < $menuLinks.length){
							if (!$menuLinks.eq(i + 1).closest('.menu-list').prev('.menu-label').find('.tag').hasClass('is-primary')){
								$nextChapter = $menuLinks.eq(i + 1);
							}
						}
					}

					if (window.location.hostname != 'localhost'){
						if ($(this).closest('.menu-list').prev('.menu-label').find('.tag').hasClass('is-primary')){
							$(this).hide();
						} else if ($(this).find('.tag').hasClass('is-primary')){
							$(this).addClass('is-disabled is-unselectable');
						}
					}
				});

				// Generate next link
				if ($nextChapter){
					var nextLink = '<div class="tile"><div class="tile is-parent"><a href="' +
						$nextChapter.attr('href') +
						'" class="tile is-child notification is-info has-text-right">další kapitola <em>' +
						$nextChapter.text() +
						'</em></a></div></div>';
					$main.after(nextLink);
				}
			}
		});


		/*
		 * Markdown rendering
		 */

		// custom renderer
		var renderer = new marked.Renderer();

		// no ids in headings
		renderer.heading = function(text, level){
			return `<h${level}>${text}</h${level}>`;
		};

		// set options
		marked.setOptions({
			renderer: renderer,
			gfm: true,
			tables: true,
			highlight: function(code){
				return hljs.highlightAuto(code).value;
			}
		});


		/*
		 * Load and render data
		 */
		$.get(window.location.pathname.split('/').slice(-1)[0] + '.md', function(data){

			var result = '';

			jQuery.each(data.split(/\r?\n---\s*\r?\n/g), function(key, value){

				var subcontent = value.split(/\r?\n----\s*\r?\n/g);

				jQuery.each(subcontent, function(subkey, subvalue){
					var className = '';

					if (subvalue.match(/^<!-- .slide: data-state="(.+?)" -->$/m)) className = subvalue.match(/^<!-- .slide: data-state="(.+?)" -->$/m);

					if (subkey === 0){
						result += '<div class="tile"><div class="tile is-parent ';
						if (subcontent.length > 1) result += 'is-3';
						result += '"><div class="tile is-child notification ' + className[1] + '"><div class="content">';
						result += marked(subvalue);
						result += '</div></div></div>';

						if (subcontent.length > 1) result += '<div class="tile is-vertical">';

					} else {
						result += '<div class="tile is-parent"><div class="tile is-child notification ' + className[1] + '"><div class="content">';
						result += marked(subvalue);
						result += '</div></div></div>';
					}

				});

				if (subcontent.length > 1) result += '</div>';

				result += '</div>';
			});

			$main.html(result);

		})
			.fail(function(){
				$main
					.html(
						'<div class="tile"><div class="tile is-parent"><div class="tile is-child notification is-danger"><div class="content"> '
						+ '<div class="tile"><p class="title is-1">Nepovedlo se načíst data, zkus obnovit stránku.</p></div>'
						+ '</div></div></div></div>'
					);
			});
	}
);