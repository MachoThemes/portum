/*jshint strict:false */
/* jshint -W079 */
var Portum = {
	/**
	 * Mobile Break Point
	 */
	MOBILEBREAKPOINT: 991,
	sticky_header: false,
	sticky_point: -1,
	/**
	 * Map styles
	 */
	mapStyle: [
		{
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#f5f5f5'
				}
			]
		},
		{
			'elementType': 'labels.icon',
			'stylers': [
				{
					'visibility': 'off'
				}
			]
		},
		{
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#616161'
				}
			]
		},
		{
			'elementType': 'labels.text.stroke',
			'stylers': [
				{
					'color': '#f5f5f5'
				}
			]
		},
		{
			'featureType': 'administrative.land_parcel',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#bdbdbd'
				}
			]
		},
		{
			'featureType': 'poi',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#eeeeee'
				}
			]
		},
		{
			'featureType': 'poi',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#757575'
				}
			]
		},
		{
			'featureType': 'poi.park',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#e5e5e5'
				}
			]
		},
		{
			'featureType': 'poi.park',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#9e9e9e'
				}
			]
		},
		{
			'featureType': 'road',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#ffffff'
				}
			]
		},
		{
			'featureType': 'road.arterial',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#757575'
				}
			]
		},
		{
			'featureType': 'road.highway',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#dadada'
				}
			]
		},
		{
			'featureType': 'road.highway',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#616161'
				}
			]
		},
		{
			'featureType': 'road.local',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#9e9e9e'
				}
			]
		},
		{
			'featureType': 'transit.line',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#e5e5e5'
				}
			]
		},
		{
			'featureType': 'transit.station',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#eeeeee'
				}
			]
		},
		{
			'featureType': 'water',
			'elementType': 'geometry',
			'stylers': [
				{
					'color': '#c9c9c9'
				}
			]
		},
		{
			'featureType': 'water',
			'elementType': 'labels.text.fill',
			'stylers': [
				{
					'color': '#9e9e9e'
				}
			]
		}
	],
	/**
	 * Plugin related functions
	 */
	Plugins: {
		/**
		 * Initiate owl slider
		 */
		owlSlider: function() {
			if ( typeof jQuery.fn.owlCarousel !== 'undefined' ) {
				let owl = jQuery( '.main-slider' );
				jQuery.each( owl, function( index, element ) {
					let self = jQuery( element );
					self.on( 'initialized.owl.carousel', function() {
						self.parent().find( '.pager-slider' ).addClass( 'active' );
					} );

					self.owlCarousel( {
						items: 1,
						dots: self.data( 'slider-enable-pager' ),
						mouseDrag: true,
						navText: '',
						nav: false,
						navClass: '',
						autoplay: self.data( 'slider-autoplay' ),
						loop: self.data( 'slider-loop' ),
						lazyLoad: false,
						autoHeight: true,
						autoplayTimeout: 5000,
					} ).on( 'translated.owl.carousel', function( event ) {
						self.parent().find( '.pager-slider li.active' ).removeClass( 'active' );
						self.parent().find( '.pager-slider li:eq(' + event.page.index + ')' ).addClass( 'active' );
					} );

					self.parent().find( '.pager-slider li' ).click( function() {
						var slideIndex = jQuery( this ).index();
						self.trigger( 'to.owl.carousel', [ slideIndex, 300 ] );
						return false;
					} );
				} );
			}
		},
		/**
		 * Initiate Slick slider
		 */
		advancedSlider: function() {
			if ( typeof jQuery.fn.slick !== 'undefined' ) {
				jQuery( '.ewf-slider' ).each( function( index, element ) {
					let self = jQuery( element );

					let slider = self.find( '.ewf-slider__slides' );

					if ( slider.hasClass( 'slick-initialized' ) ) {
						return true;
					}

					slider.slick( {
						adaptiveHeight: true,
						fade: self.data( 'slider-mode-fade' ),
						cssEase: 'linear',
						speed: self.data( 'slider-speed' ) ? parseInt( self.data( 'slider-speed' ), 10 ) : 500,
						autoplay: self.data( 'slider-autoplay' ),
						infinite: self.data( 'slider-loop' ),
						arrows: self.data( 'slider-enable-controls' ),
						prevArrow: '<a class="slick-prev" href="#"><i class="fa fa-angle-left"></i></a>',
						nextArrow: '<a class="slick-next" href="#"><i class="fa fa-angle-right"></i></a>',
						appendArrows: self.find( '.ewf-slider__arrows' ),
						dots: self.data( 'slider-enable-pager' ),
						appendDots: self.find( '.ewf-slider__pager' )

					} );

					slider.on( 'init', function( e, slick ) {
						let $firstAnimatingElements = jQuery( '.slick-slide:first-child' ).find( '[data-animation]' );
						Portum.Plugins.doAnimations( $firstAnimatingElements );
					} );

					slider.on( 'beforeChange', function( e, slick, currentSlide, nextSlide ) {
						let $animatingElements = jQuery( '.slick-slide[data-slick-index="' + nextSlide + '"]' ).find( '[data-animation]' );
						Portum.Plugins.doAnimations( $animatingElements );
					} );

				} );
			}
		},
		clientList: function() {
			if ( typeof jQuery.fn.slick !== 'undefined' ) {
				jQuery( '.ewf-partner-slider .ewf-partner-slider__slides' ).each( function( index, element ) {

					let self = jQuery( element );

					// if slider already initialize go to next;
					if ( self.hasClass( 'slick-initialized' ) ) {
						return true;
					}

					self.slick( {
						variableWidth: true,
						autoplay: false,
						infinite: true,
						slidesToShow: 6,
						slidesToScroll: 2,
						speed: 500,
						fade: false,
						cssEase: 'linear',
						arrows: false,
						dots: true,
						appendDots: self.next()
					} );
				} );
			}
		},
		/**
		 * Set Pie Chart Dimensions accordion to the width they occupy in the
		 */
		setDimensionsPieCharts: function() {
			jQuery( '.ewf-pie__chart' ).each( function( index, element ) {

				let self = jQuery( element ),
					n = self.parent().width(),
					r = self.data( 'barsize' );

				if ( n < r ) {
					r = n;
				}

				self.find( 'canvas' ).css( {
					'height': r,
					'width': r,
				} );

				self.find( '.ewf-pie__icon i' ).css( {
					'line-height': r + 'px',
					'font-size': r / 3
				} );

				self.parent().css( {
					'line-height': r + 'px'
				} )

			} );
		},
		/**
		 * Animate Pie Charts
		 */
		animatePieCharts: function() {
			if ( typeof jQuery.fn.easyPieChart !== 'undefined' ) {

				jQuery( '.ewf-pie__chart:in-viewport' ).each( function( index, element ) {

					let self = jQuery( element );

					n = self.parent().width(),
						r = self.data( 'barSize' ),
						l = 'square';

					if ( self.data( 'lineCap' ) !== undefined ) {
						l = self.attr( 'lineCap' );
					}

					if ( n < r ) {
						r = n;
					}

					self.easyPieChart( {
						animate: 1300,
						lineCap: l,
						lineWidth: self.attr( 'data-lineWidth' ),
						size: r,
						barColor: self.attr( 'data-barColor' ),
						trackColor: self.attr( 'data-trackColor' ),
						scaleColor: 'transparent',
						onStep: function( from, to, percent ) {
							jQuery( this.el ).find( '.ewf-pie__percent span' ).text( Math.round( percent ) );
						}

					} );

				} );

			}
		},
		animateProgress: function() {
			jQuery( '.ewf-progress__bar-liniar:in-viewport' ).each( function( index, element ) {

				let self = jQuery( element );

				if ( !self.hasClass( 'already-animated' ) ) {
					self.addClass( 'already-animated' );

					self.animate( {
						width: self.data( 'value' ) + '%'
					}, 2000 );
				}

			} );
		},
		/**
		 * Animate counters on page scroll
		 */
		animateCounters: function() {
			jQuery( '.ewf-counter__standard:in-viewport' ).each( function( index, element ) {

				let self = jQuery( element ),
					n = self.data( 'value' ),
					r = parseInt( self.data( 'speed' ), 10 );

				if ( !self.hasClass( 'already-animated' ) ) {
					self.addClass( 'already-animated' );
					jQuery( {
						countNum: self.text()
					} ).animate( {
						countNum: n
					}, {
						duration: r,
						easing: 'linear',
						step: function() {
							self.text( Math.floor( this.countNum ) );
						},
						complete: function() {
							self.text( this.countNum );
						}
					} );
				}

			} );

			if ( typeof window.Odometer !== 'undefined' ) {

				jQuery( '.ewf-counter__odometer:in-viewport' ).each( function( index ) {

					var newID = 'ewf-counter__odometer-' + index;

					this.id = newID;

					var value = jQuery( this ).attr( 'data-value' );

					if ( !jQuery( this ).hasClass( 'already-animated' ) ) {

						jQuery( this ).addClass( 'already-animated' );

						setTimeout( function() {
							document.getElementById( newID ).innerHTML = value;
						} );

					}

				} );

			}

		},
		doAnimations: function( elements ) {
			let animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each( function( index, element ) {
				let self = jQuery( element );
				let animationDelay = self.data( 'delay' ) || '0';
				let animationType = 'animated ' + self.data( 'animation' );
				self.css( {
					'animation-delay': animationDelay,
					'-webkit-animation-delay': animationDelay
				} );
				self.addClass( animationType ).on( animationEndEvents, function() {
					self.removeClass( animationType );
				} );
			} );
		},
		/**
		 * Initiate the magnific Popup
		 */
		magnificPopup: function() {
			if ( typeof jQuery.fn.magnificPopup !== 'undefined' ) {
				jQuery( '.magnific-link' ).magnificPopup( {
					type: 'image',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [ 0, 1 ]
					},
				} );
			}
		},
		/**
		 * Initiate Plyr library on video elements
		 */
		video: function() {
			if ( typeof Plyr !== 'undefined' ) {
				let videos = jQuery( '.portum-video-area' );
				jQuery.each( videos, function( index, videoContainer ){
					let video = jQuery( videoContainer ).find( 'div' );
					new Plyr( video );
				});
			}
		}
	},
	/**
	 * Theme related functions
	 */
	Theme: {

		/**
		 * Function that handles accordion toggles
		 */
		handleAccordions: function() {

			jQuery( document ).on( 'click', '.accordion-item-toggle', function() {

				// show the clicked on panel
				jQuery( this ).next().slideToggle( 'fast' );

				// hide the other panels
				jQuery( '.accordion-item-content' ).not( $( this ).next() ).slideUp( 'fast' );

			} );

		},

		/**
		 * Initiate smooth scroll
		 */
		smoothScroll: function() {
			// Select all links with hashes
			jQuery( 'a[href*="#"]' )

			// Remove links that don't actually link to anything
				.not( '[href="#"]' ).click( function( event ) {

				// On-page links
				if (
					location.pathname.replace( /^\//, '' ) === this.pathname.replace( /^\//, '' ) &&
					location.hostname === this.hostname
				) {

					// Figure out element to scroll to
					let target = jQuery( this.hash );
					target = target.length ? target : jQuery( '[name=' + this.hash.slice( 1 ) + ']' );

					// Does a scroll target exist?
					if ( target.length ) {

						// Only prevent default if animation is actually gonna happen
						event.preventDefault();
						jQuery( 'html, body' ).animate( {
							scrollTop: target.offset().top
						}, 1000, function() {

							// Callback after animation
							// Must change focus!
							let target = jQuery( target );
							target.focus();
							if ( target.is( ':focus' ) ) { // Checking if the target was focused
								return false;
							} else {
								target.attr( 'tabindex', '-1' ); // Adding tabindex for elements not focusable
								target.focus(); // Set focus again
							}
						} );
					}
				}
			} );
		},

		/**
		 * =Sticky header
		 */

		header: function() {

			if ( Portum.sticky_point < 0 ) {
				Portum.sticky_point = 0;

				if ( jQuery( 'body' ).hasClass( 'sticky-header' ) ) {
					Portum.sticky_header = true;
					Portum.sticky_point = jQuery( '#header' ).outerHeight();
				}

			}

			var b = document.documentElement,
				e = false;

			function f() {

				window.addEventListener( 'scroll', function( h ) {

					if ( !e ) {
						e = true;
						setTimeout( d, 50 );
					}
				}, false );

				window.addEventListener( 'load', function( h ) {

					if ( !e ) {
						e = true;
						setTimeout( d, 50 );
					}
				}, false );
			}

			function d() {

				let h = c();

				if ( h >= Portum.sticky_point ) {
					jQuery( '#header' ).addClass( 'stuck' );
				} else {
					jQuery( '#header' ).removeClass( 'stuck' );
				}
				e = false;
			}

			function c() {

				return window.pageYOffset || b.scrollTop;

			}

			if ( Portum.sticky_header ) {
				f();
			}
		},

		/**
		 * Back to top function
		 */
		hideBackTop: function() {
			if ( jQuery( window ).scrollTop() > jQuery( window ).height() / 2 ) {
				jQuery( '#back-to-top' ).removeClass( 'gone' ).addClass( 'visible' );
			} else {
				jQuery( '#back-to-top' ).removeClass( 'visible' ).addClass( 'gone' );
			}
		},
		backTop: function() {
			jQuery( '#back-to-top' ).on( 'click', function() {
				jQuery( 'html, body' ).animate( { scrollTop: 0 }, 'slow' );
				return false;
			} );
		},
		/**
		 * Generate the map based on an address
		 */
		map: function() {
			if ( typeof google !== 'undefined' ) {

				self = this;

				jQuery( '.map-canvas' ).each( function() {
					let map_element = this;
					let geocoder = new google.maps.Geocoder(),
						address = jQuery( this );

					if ( !address.length ) {
						return;
					}

					geocoder.geocode( {
						'address': address.attr( 'data-address' )
					}, function( results, status ) {
						if ( status === google.maps.GeocoderStatus.OK ) {
							self._mapCallback( results, address.attr( 'data-zoom' ), map_element );
						}
					} );

				} );
			}
		},

		/**
		 * After we "find" out the center, initiate the map & marker
		 * @param results
		 * @param zoom
		 * @param map_element
		 * @private
		 */
		_mapCallback: function( results, zoom, map_element ) {

			let map, marker, totalHeight, mapHeight, section,
				config = {
					zoom: parseFloat( zoom ),
					center: results[ 0 ].geometry.location,
					scrollwheel: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					disableDefaultUI: true,
					styles: Portum.mapStyle
				};

			section = jQuery( map_element ).closest( '.ewf-section' );
			mapHeight = parseInt( jQuery( map_element ).attr( 'data-mapheight' ) );
			map = new google.maps.Map( map_element, config );
			marker = new google.maps.Marker( {
				map: map,
				position: results[ 0 ].geometry.location
			} );

			if ( jQuery( section ).hasClass( 'ewf-section--title-top' ) ) {
				jQuery( section ).css( 'padding-top', mapHeight + 'px' );
				totalHeight = jQuery( section ).height();
				panValue = (totalHeight - ((totalHeight + mapHeight) / 2)) + (mapHeight / 2);
				map.panBy( 0, panValue );
			} else {

			}
		},

		/**
		 * Dropdown menu
		 */
		menu: function() {
			if ( 'undefined' !== typeof jQuery.fn.superfish ) {
				jQuery( '#menu' ).superfish( {
					delay: 500,
					animation: { opacity: 'show', height: 'show' },
					speed: 100,
					cssArrows: false
				} );
			}

			jQuery( '#mobile-menu-trigger' ).click( function( event ) {
				var $t = jQuery( this ),
					$n = jQuery( '#mobile-menu' );

				if ( $t.hasClass( 'mobile-menu-opened' ) ) {
					$t.removeClass( 'mobile-menu-opened' ).addClass( 'mobile-menu-closed' );
					$n.slideUp( 300 );
				} else {
					$t.removeClass( 'mobile-menu-closed' ).addClass( 'mobile-menu-opened' );
					$n.slideDown( 300 );
				}
				event.preventDefault();
			} );

		},

	},
	/**
	 * Mobile related functions
	 */
	Mobile: {
		/**
		 * Mobile menu
		 */
		menu: function() {
			if ( jQuery( window ).width() > Portum.MOBILEBREAKPOINT ) {
				jQuery( '#mobile-menu' ).hide();
				jQuery( '#mobile-menu-trigger' ).removeClass( 'mobile-menu-opened' ).addClass( 'mobile-menu-closed' );

			} else if ( !jQuery( '#mobile-menu' ).length ) {
				jQuery( '#menu' ).clone().attr( {
					id: 'mobile-menu',
					'class': ''
				} ).insertAfter( '#header' );

				jQuery( '#mobile-menu > li > a, #mobile-menu > li > ul > li > a' ).each( function() {
					var $t = jQuery( this );
					if ( $t.next().hasClass( 'sub-menu' ) || $t.next().is( 'ul' ) || $t.next().is( '.sf-mega' ) ) {
						$t.append( '<span class="fa fa-angle-down mobile-menu-submenu-arrow mobile-menu-submenu-closed"></span>' );
					}
				} );

				jQuery( '.mobile-menu-submenu-arrow' ).on( 'click', function( event ) {
					var $t = jQuery( this );
					if ( $t.hasClass( 'mobile-menu-submenu-closed' ) ) {
						$t.removeClass( 'mobile-menu-submenu-closed fa-angle-down' ).addClass( 'mobile-menu-submenu-opened fa-angle-up' ).parent().siblings( 'ul, .sf-mega' ).slideDown( 300 );
					} else {
						$t.removeClass( 'mobile-menu-submenu-opened fa-angle-up' ).addClass( 'mobile-menu-submenu-closed fa-angle-down' ).parent().siblings( 'ul, .sf-mega' ).slideUp( 300 );
					}
					event.preventDefault();
				} );

				jQuery( '#mobile-menu li, #mobile-menu li a, #mobile-menu ul' ).attr( 'style', '' );
			}
		}
	},
	/**
	 * Javascript events in the theme
	 */
	Events: {},
	/**
	 * Helper functions
	 */
	Helpers: {}
};