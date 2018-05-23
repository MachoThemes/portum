<?php
/**
 * Template part for displaying a frontpage section
 *
 * @link    https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Portum
 */

$frontpage = Epsilon_Page_Generator::get_instance( 'portum_frontpage_sections_' . get_the_ID(), get_the_ID() );
$fields    = $frontpage->sections[ $section_id ];
$grouping  = array( 'values'   => $fields['progress_bars_grouping'], 'group_by' => 'progress_bar_title', );
$fields['progress_bars'] = $frontpage->get_repeater_field( $fields['progress_bars_repeater_field'], array(), $grouping );

$attr_helper             = new Epsilon_Section_Attr_Helper( $fields, 'progress', Portum_Repeatable_Sections::get_instance() );

$parent_attr             = array(
	'id'    => ! empty( $fields['progress_section_unique_id'] ) ? array( $fields['progress_section_unique_id'] ) : array(),
	'class' => array( 'section-progress', 'section', 'ewf-section' ),
	'style' => array( 'background-image', 'background-position', 'background-size', 'background-repeat' ),
);

$span      = 12 / absint( $fields['progress_column_group'] );
?>

<section data-customizer-section-id="portum_repeatable_section" data-section="<?php echo esc_attr( $section_id ); ?>">
	<div <?php $attr_helper->generate_attributes( $parent_attr ); ?>>
		<?php
		$attr_helper->generate_video_overlay();
		$attr_helper->generate_color_overlay();
		
		$span      = 12 / absint( $fields['progress_column_group'] );
		
		$section_item_columns = 12 / intval($fields['progress_column_group']);
		$section_items_content = 12 - $section_item_columns;
		?>
		
		<div class="ewf-section__content">
		<div class="<?php echo esc_attr( Portum_Helper::container_class( 'progress', $fields ) ); ?>">
		
			<?php echo wp_kses( Portum_Helper::generate_pencil( 'Portum_Repeatable_Sections', 'progress' ), Epsilon_Helper::allowed_kses_pencil() ); ?>
			

			
			
			<?php if ($fields['progress_row_title_align'] == 'left'){ ?>
				<div class="row">
				
					<div class="col-md-<?php echo $section_item_columns; ?>">
						<?php echo wp_kses_post( Portum_Helper::generate_section_title( $fields['progress_bars_subtitle'], $fields['progress_bars_title'] ) ); ?>
					</div>
					
					<div class="col-md-<?php echo $section_items_content; ?>">
						<?php foreach ( $fields['progress_bars'] as $progress ) { ?>
							<div class="col-md-<?php echo $section_item_columns; ?>">
								<div class="ewf-progress <?php echo $progress['progress_bar_type'] === 'alternate' ? 'ewf-progress--alternative-modern' : ''; ?>">

									<h6 class="ewf-progress__title">
										<?php if ( ! empty( $progress['progress_bar_title'] ) ) { ?><?php echo esc_html( $progress['progress_bar_title'] ); ?>

											<?php if ( ! empty( $progress['progress_bar_value'] ) ) { ?>
												<span><?php echo $progress['progress_bar_value']; ?>%</span>
											<?php } ?>

										<?php } ?>
									</h6><!-- end .ewf-progress__title -->

									<div class="ewf-progress__bar">
										<div class="ewf-progress__bar-liniar-wrap">
											<div class="ewf-progress__bar-liniar" data-value="<?php echo ! empty( $progress['progress_bar_value'] ) ? esc_attr( $progress['progress_bar_value'] ) : 85; ?>"></div>
										</div>
									</div><!-- end .ewf-progress__bar -->

								</div><!-- end .ewf-progress -->
							</div>
						<?php } ?>
					</div>
					
				</div>
			<?php }elseif ($fields['progress_row_title_align'] == 'right'){ ?>
				<div class="row">
									
					<div class="col-md-<?php echo $section_items_content; ?>">
						<?php foreach ( $fields['progress_bars'] as $progress ) { ?>
							<div class="col-md-<?php echo $section_item_columns; ?>">
								<div class="ewf-progress <?php echo $progress['progress_bar_type'] === 'alternate' ? 'ewf-progress--alternative-modern' : ''; ?>">

									<h6 class="ewf-progress__title">
										<?php if ( ! empty( $progress['progress_bar_title'] ) ) { ?><?php echo esc_html( $progress['progress_bar_title'] ); ?>

											<?php if ( ! empty( $progress['progress_bar_value'] ) ) { ?>
												<span><?php echo $progress['progress_bar_value']; ?>%</span>
											<?php } ?>

										<?php } ?>
									</h6><!-- end .ewf-progress__title -->

									<div class="ewf-progress__bar">
										<div class="ewf-progress__bar-liniar-wrap">
											<div class="ewf-progress__bar-liniar" data-value="<?php echo ! empty( $progress['progress_bar_value'] ) ? esc_attr( $progress['progress_bar_value'] ) : 85; ?>"></div>
										</div>
									</div><!-- end .ewf-progress__bar -->

								</div><!-- end .ewf-progress -->
							</div>
						<?php } ?>
					</div>
					
					<div class="col-md-<?php echo $section_item_columns; ?>">
						<?php echo wp_kses_post( Portum_Helper::generate_section_title( $fields['progress_bars_subtitle'], $fields['progress_bars_title'], array('bottom' => true) ) ); ?>
					</div>
				</div>
			<?php }else{ ?>
			
				<div class="row">
					<div class="col-md-12">
						<?php echo wp_kses_post( Portum_Helper::generate_section_title( $fields['progress_bars_subtitle'], $fields['progress_bars_title'] ) ); ?>
					</div>
				</div>
			
				<div class="row">
					<?php foreach ( $fields['progress_bars'] as $progress ) { ?>
						<div class="col-md-<?php echo $section_item_columns; ?>">
							<div class="ewf-progress <?php echo $progress['progress_bar_type'] === 'alternate' ? 'ewf-progress--alternative-modern' : ''; ?>">

								<h6 class="ewf-progress__title">
									<?php if ( ! empty( $progress['progress_bar_title'] ) ) { ?><?php echo esc_html( $progress['progress_bar_title'] ); ?>

										<?php if ( ! empty( $progress['progress_bar_value'] ) ) { ?>
											<span><?php echo $progress['progress_bar_value']; ?>%</span>
										<?php } ?>

									<?php } ?>
								</h6><!-- end .ewf-progress__title -->

								<div class="ewf-progress__bar">
									<div class="ewf-progress__bar-liniar-wrap">
										<div class="ewf-progress__bar-liniar" data-value="<?php echo ! empty( $progress['progress_bar_value'] ) ? esc_attr( $progress['progress_bar_value'] ) : 85; ?>"></div>
									</div>
								</div><!-- end .ewf-progress__bar -->

							</div><!-- end .ewf-progress -->
						</div>
					<?php } ?>
				</div>
			<?php } ?>
			
			
		</div>
		</div>
	</div>
</section>
