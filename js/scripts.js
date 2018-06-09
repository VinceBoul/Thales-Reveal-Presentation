			// More info about config & dependencies:
			// - https://github.com/hakimel/reveal.js#configuration
			// - https://github.com/hakimel/reveal.js#dependencies
			Reveal.initialize({
				dependencies: [
					{ src: 'plugin/markdown/marked.js' },
					{ src: 'plugin/markdown/markdown.js' },
					{ src: 'plugin/notes/notes.js', async: true },
					{ src: 'plugin/zoom-js/zoom.js', async: true },
					{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
			        { src: 'plugin/reveal-leap-motion/reveal-leap-motion.min.js', async: true }

				],
				controls : false,
				slideNumber: 'c/t',
				showNotes: true,

				"reveal-leap-motion": {
				    naturalSwipe: true,     // Invert swipe gestures
				    gestureDelay: 1000,
				    pointerColor: '#d80000', // Red pointer
				    pointerOpacity: 0,     // Set pointer opacity to 0.5
				    autoCenter: true,
				    pointerSize: 15,
				    pointerTolerance: 80
				},

			});
			console.log(Reveal.getIndices());
			console.log(Reveal.getTotalSlides());

			Reveal.addEventListener( 'somestate', function(e) {
				// TODO: Sprinkle magic
				console.log('truc de ouf');
				console.log(e);

			} );


			$(document).ready(function() {
				$('.totalPages').html(Reveal.getTotalSlides());
			

	
				$(this).keyup(function(e) {
				    if(e.shiftKey){
						if ($('#search').is(':visible')){
							$('#search').hide('fade');
						}else{
							$('#search').show('fade');
						}
					 }
				});
				
				$('#search').keyup(function(event) {
					if (event.keyCode == 13){
						console.log($(this).val());
						Reveal.slide($(this).val());
					}
				});

			});

			var currentPage = 1;
			var headerDarkIndex;
			Reveal.addEventListener( 'slidechanged', function( event ) {
					controlDesign(Reveal.getState());
					// Changement de couleur du header
					console.log(event.currentSlide);
					changeBackground(event.currentSlide);
					headerDarkIndex = controlHeaderChange(event.currentSlide, Reveal.getState(), headerDarkIndex);


				// event.previousSlide, event.currentSlide, event.indexh, event.indexv
			} );

			function changeBackground(slide){
				if ($(slide).hasClass('thalesHN')){
					console.log('On y est');
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

			function controlHeaderChange(slide, state, index){
				if ($(slide).hasClass('problematique')){
					index = state;
					if (index >= state){
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


