<?php
/**
 * Portum Theme Customizer repeatable section
 *
 * @package Portum
 * @since   1.0
 */

if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once dirname( __FILE__ ) . '/repeatable-section.php';

/**
 * Class Repeatable_Section_Advanced_Slider
 */
class Repeatable_Section_Advanced_Slider extends Repeatable_Section {

	/**
	 * Sets the section id
	 */
	public function set_id() {
		$this->id = 'advanced-slider';
	}

	/**
	 * Sets section title
	 */
	public function set_title() {
		$this->title = esc_html__( 'Advanced Slider', 'portum' );
	}

	/**
	 * Description
	 */
	public function set_description() {
		$this->description = esc_html__( 'A multi-purpose slider section that you can use through-out your website.', 'portum' );
	}

	/**
	 * Sets section image
	 */
	public function set_image() {
		$this->image = esc_url( get_template_directory_uri() . '/assets/images/sections/ewf-icon-section-advanced-slider.png' );
	}

	/**
	 * Creates the section fields
	 */
	public function create_fields() {
		$this->fields = $this->normal_fields();
	}

	/**
	 * Normal fields
	 *
	 * @return array
	 */
	public function normal_fields() {
		return array(
			'slider_autostart'         => array(
				'label'       => esc_html__( 'Autostart', 'portum' ),
				'description' => esc_html__( 'Automatically start slider after page has finished loading.', 'portum' ),
				'type'        => 'epsilon-toggle',
				'default'     => true,
			),
			'slider_infinite'          => array(
				'label'       => esc_html__( 'Loop Slides', 'portum' ),
				'description' => esc_html__( 'When the slider reaches the last slide, it will automatically start again from the first one.', 'portum' ),
				'type'        => 'epsilon-toggle',
				'default'     => true,
			),
			'slider_pager'             => array(
				'label'       => esc_html__( 'Navigation Dots', 'portum' ),
				'description' => esc_html__( 'Show slider navigation dots', 'portum' ),
				'type'        => 'epsilon-toggle',
				'default'     => true,
			),
			'slider_controls'          => array(
				'label'       => esc_html__( 'Navigation Arrows', 'portum' ),
				'description' => esc_html__( 'Show prev/next arrows', 'portum' ),
				'type'        => 'epsilon-toggle',
				'default'     => true,
			),
			'slider_upsell'            => array(
				'type'               => 'epsilon-upsell',
				'label'              => esc_html__( 'More Slider Controls', 'portum' ),
				'features'           => array(
					array(
						'option' => esc_html__( 'Control how many slides to display at once', 'portum' ),
						'help'   => esc_html__( 'Choose to display 2 or 3 slides at once for a magazine-like website.', 'portum' ),
					),
					array(
						'option' => esc_html__( 'Control how many slides to change at once', 'portum' ),
						'help'   => esc_html__( 'No more one slide after the other, slide 3,4 or even more at a time.', 'portum' ),
					),
					array(
						'option' => esc_html__( 'Control Slider Height', 'portum' ),
						'help'   => esc_html__( 'Turn your slider into a full-height one with the PRO version.', 'portum' ),
					),
					array(
						'option' => esc_html__( 'Control Slider Transition Time', 'portum' ),
						'help'   => esc_html__( 'Change the slider transition time.', 'portum' ),
					),
				),
				'button_text'        => esc_html__( 'See more', 'portum' ),
				'button_url'         => esc_url( 'https://www.machothemes.com/portum-pro/#comparison-table' ),
				'second_button_text' => esc_html__( 'Get PRO', 'portum' ),
				'second_button_url'  => esc_url( 'https://www.machothemes.com/portum-pro/' ),
				'separator'          => esc_html__( 'or', 'portum' ),
			),
			'slider_advanced_grouping' => array(
				'label'       => esc_html__( 'Filter shown slides', 'portum' ),
				'description' => esc_html__( 'The items you select in here are the only ones which will be displayed on this page. Think of the information you create in a section similar to a blog post. They are all created in a single place, but filtered by category. If you want to use multiple sections and display different information in each of them, use the filtering. ', 'portum' ),
				'type'        => 'selectize',
				'multiple'    => true,
				'choices'     => Portum_Helper::get_group_values_from_meta( 'portum_advanced_slides', 'slide_title' ),
				'linking'     => array( 'portum_advanced_slides', 'slide_title' ),
				'default'     => array( 'all' ),
			),
			'slider_navigation'        => array(
				'type'            => 'epsilon-customizer-navigation',
				'opensDoubled'    => true,
				'navigateToId'    => 'portum_advanced_slides_section',
				'navigateToLabel' => esc_html__( 'Add/Edit Slides &rarr;', 'portum' ),
			),
			'slider_repeater_field'    => array(
				'type'    => 'hidden',
				'default' => 'portum_advanced_slides',
			),
			'slider_upsell'            => array(
				'type'               => 'epsilon-upsell',
				'label'              => esc_html__( 'More Controls in Portum PRO', 'portum' ),
				'features'           => array(
					array(
						'option' => esc_html__( 'Button Controls', 'portum' ),
						'help'   => esc_html__( 'Control the size, radius, background color, text color, border color of buttons.', 'portum' ),
					),
				),
				'button_text'        => esc_html__( 'See more', 'portum' ),
				'button_url'         => esc_url( 'https://www.machothemes.com/portum-pro/#comparison-table' ),
				'second_button_text' => esc_html__( 'Get PRO', 'portum' ),
				'second_button_url'  => esc_url( 'https://www.machothemes.com/portum-pro/' ),
				'separator'          => esc_html__( 'or', 'portum' ),
			),
		);
	}
}
