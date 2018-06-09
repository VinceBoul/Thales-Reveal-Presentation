			// More info about config & dependencies:
			// - https://github.com/hakimel/reveal.js#configuration
			// - https://github.com/hakimel/reveal.js#dependencies
			Reveal.initialize({
				dependencies: [
					{ src: 'plugin/markdown/marked.js' },
					{ src: 'plugin/markdown/markdown.js' },
					{ src: 'plugin/notes/notes.js', async: true },
					{ src: 'plugin/zoom-js/zoom.js', async: true },
					{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
				],
				controls : false,
				slideNumber: 'c/t',
				showNotes: true
			});

			$(document).ready(function() {
				$('.totalPages').html(Reveal.getTotalSlides());
			});

			var currentPage = 1;
			var headerDarkIndex;
			Reveal.addEventListener( 'slidechanged', function( event ) {
					controlDesign(Reveal.getState());
					// Changement de couleur du header
					console.log(event.currentSlide);
					changeBackground(event.currentSlide);
					headerDarkIndex = controlHeaderChange(event.currentSlide, headerDarkIndex);
					console.log(headerDarkIndex);
			});

			function changeBackground(slide){
				if ($(slide).hasClass('thalesHN')){
					console.log('On y est');
				} else if ($(slide).hasClass('problematique')){
					console.log('On y est 2');

					switchHeaderClass();								
				}
			}

			function controlDesign(state){
				if ( state.indexh > 0){
					$('#logo_thales').show();
					$('.header').show();
					$('.footer').show();
				}else if(state.indexh == 0){
					$('.header').hide();
					$('.footer').hide();
				}
			}

			function controlHeaderChange(slide, index){
				if ($(slide).hasClass('problematique')){
					index = Reveal.getState();
					if (index >= Reveal.getState()){
						switchHeaderClass();							
						//switchFooterClass();
					}
				}
				return index;
			}

			function switchHeaderClass(){
				if ($('.header').hasClass('dark')){
					$('.header').addClass('light');
					$('.header').removeClass('dark');
				}else{
					console.log('hey');
					$('.header').addClass('dark');
					$('.header').removeClass('light');
				}
			}

			function switchFooterClass(){
				if ( $('footer').hasClass('borderTop') ) {
					$('footer').removeClass('borderTop');
				}else{
					$('footer').addClass('borderTop');
				}
			}


