/*
 * loads what is defined in data-markdown path and renders it
 */

$(document).ready(
	function(){
		var renderer = new marked.Renderer();

		renderer.heading = function(text, level){
			return `<h${level}>${text}</h${level}>`;
		};

		marked.setOptions({
			renderer: renderer,
			gfm: true,
			tables: true,
			highlight: function(code){
				return hljs.highlightAuto(code).value;
			}
		});

		// console.info(window.location.pathname.split('/').slice(-1)[0]+'.md');

		$('[data-markdown]').each(function(){
			var $element = $(this);

			$
				.get($element.data('markdown'), function(data){

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

					$element.html(result);

				})
				.fail(function(){
					$element.html('<p>Could not find: <code>' + $element.data('markdown') + '</code></p>');
				});
		});

		/*
		function createToc(){
			$('.toc').toc({
				'selectors': 'h1,h2,h3', //elements to use as headings
				'container': '.tile', //element to find all selectors in
				'smoothScrolling': false, //enable or disable smooth scrolling on click
				'prefix': 'toc', //prefix for anchor tags and class names
				'onHighlight': function(el){
				}, //called when a new section is highlighted
				'highlightOnScroll': true, //add class to heading that is currently in focus
				'highlightOffset': 100, //offset to trigger the next headline
				'anchorName': function(i, heading, prefix){ //custom function for anchor name
					return prefix + i;
				},
				'itemClass': function(i, heading, $heading, prefix){ // custom function for item class
					return $heading[0].tagName.toLowerCase();
				}
			});
		}

		setTimeout(createToc, 3000);
		*/

	}
);