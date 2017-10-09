<?php
/**
 * Template part for displaying a frontpage section
 *
 * @link    https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Portum
 */

$frontpage = Portum_Frontpage::get_instance( 'portum_frontpage_sections' );
$fields    = $frontpage->sections[ $section_id ];
?>

<section data-customizer-section-id="portum_repeatable_section" data-section="<?php echo esc_attr( $section_id ); ?>">
	<div class="section-video section">
		<div class="video-area auto-resizable-iframe">
			<div data-type="<?php echo esc_attr( $fields['video_type'] ); ?>" data-video-id="<?php echo esc_attr( $fields['video_id'] ); ?>"></div>
		</div>
		<div class="info-area">
			<div class="container">
				<div class="row">
					<div class="<?php echo ! empty( $fields['mailchimp_url'] ) ? ' col-md-6' : 'col-md-12'; ?>">
						<?php echo wpautop( wp_kses_post( $fields['video_cta'] ) ); ?>
					</div>
					<?php if ( ! empty( $fields['mailchimp_url'] ) ) { ?>
						<div class="col-md-6">
							<div class="newsletter">
								<form novalidate="" target="_blank" class="" name="mc-embedded-subscribe-form" id="mc-embedded-subscribe-form" method="post" action="<?php echo esc_url( $fields['mailchimp_url'] ); ?>">
									<input type="text" placeholder="<?php esc_attr_e( 'Enter your e-mail address', 'portum' ); ?>" id="mce-EMAIL" class="subs_input" name="EMAIL" value="">
									<input type="submit" class="subs-button" value="<?php esc_attr_e( 'Subscribe', 'portum' ); ?>" name="subscribe">
								</form>
							</div>
						</div>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
</section>
