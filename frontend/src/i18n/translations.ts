export type Language = 'en' | 'hi' | 'pa';

export interface Translations {
  // Navigation
  nav_marketplace: string;
  nav_farmer_hub: string;
  nav_logistics: string;
  nav_analytics: string;
  nav_demo: string;

  // Common Crops
  crop_tomato: string;
  crop_onion: string;
  crop_potato: string;
  crop_wheat: string;
  crop_rice: string;
  all_crops: string;

  // Common Locations
  loc_mohali: string;
  loc_chandigarh: string;
  loc_patiala: string;
  loc_ludhiana: string;
  loc_delhi: string;

  // Common Units & Actions
  unit_kg: string;
  unit_per_kg: string;
  available_supply: string;
  harvest_date: string;
  locate_btn: string;
  focused_btn: string;
  verified_farm: string;
  order_btn_short: string;
  loading: string;

  // Footer
  footer_desc: string;
  footer_badge1: string;
  footer_badge2: string;
  footer_copyright: string;

  // Landing Page
  landing_eyebrow: string;
  landing_title_1: string;
  landing_title_2: string;
  landing_title_3: string;
  landing_desc: string;
  landing_cta_marketplace: string;
  landing_cta_farmer: string;
  landing_cta_demo: string;
  flow_farmer: string;
  flow_match: string;
  flow_logistics: string;
  flow_buyer: string;
  feature_forecast_title: string;
  feature_forecast_desc: string;
  feature_gis_title: string;
  feature_gis_desc: string;
  feature_logistics_title: string;
  feature_logistics_desc: string;
  stat_accuracy: string;
  stat_accuracy_sub: string;
  stat_markup: string;
  stat_markup_sub: string;
  stat_hubs: string;
  stat_hubs_sub: string;
  stat_miles: string;
  stat_miles_sub: string;

  // Farmer Dashboard
  dash_tag: string;
  dash_title: string;
  dash_desc: string;
  dash_list_produce_btn: string;
  dash_kpi_listings: string;
  dash_kpi_listings_sub: string;
  dash_kpi_orders: string;
  dash_kpi_orders_sub: string;
  dash_kpi_demand: string;
  dash_kpi_demand_growth: string;
  dash_kpi_harvest: string;
  dash_kpi_harvest_sub: string;
  dash_forecast_tag: string;
  dash_forecast_sub: string;
  dash_confidence: string;
  dash_disclaimer: string;
  dash_opp_tag: string;
  dash_opp_title: string;
  dash_opp_note: string;
  dash_opp_tip: string;
  dash_opp_link: string;
  dash_gis_badge: string;
  dash_gis_title: string;
  dash_gis_subtitle: string;
  dash_focus_banner_title: string;
  dash_reset_focus: string;
  dash_inventory_badge: string;
  dash_inventory_title: string;
  dash_inventory_subtitle: string;

  // Produce Form
  form_page_tag: string;
  form_page_title: string;
  form_page_desc: string;
  form_crop_label: string;
  form_qty_label: string;
  form_price_label: string;
  form_location_label: string;
  form_grade_label: string;
  form_grade_a: string;
  form_grade_b: string;
  form_date_label: string;
  form_submit_btn: string;
  form_submitting_btn: string;
  form_success_msg: string;
  form_preview_tag: string;
  form_preview_title: string;
  form_preview_sub: string;
  form_preview_volume: string;
  form_preview_price: string;
  form_preview_footer: string;

  // Marketplace
  market_page_tag: string;
  market_page_title: string;
  market_page_desc: string;
  market_search_placeholder: string;
  market_no_results: string;
  market_no_results_sub: string;
  market_available_from: string;

  // Order Page
  order_page_tag: string;
  order_page_title_new: string;
  order_page_title_result: string;
  order_page_desc_new: string;
  order_page_desc_result: string;
  order_crop_label: string;
  order_quantity_label: string;
  order_destination_label: string;
  order_date_label: string;
  order_submit_btn: string;
  order_submitting_btn: string;
  order_result_badge: string;
  order_result_code: string;
  order_farmers_pooled: string;
  order_breakdown_title: string;
  order_col_item: string;
  order_col_rate: string;
  order_col_amount: string;
  order_produce_farmer_subtotal: string;
  order_produce_subtext: string;
  order_logistics_fee: string;
  order_logistics_subtext: string;
  order_platform_fee: string;
  order_total_landed_payable: string;
  order_effective_landed_rate: string;
  order_view_route_btn: string;
  order_farmer_price_note: string;
  order_platform_fee_badge: string;
  order_cap_applied_badge: string;
  order_rate_applied_badge: string;

  // Logistics Page
  log_page_tag: string;
  log_page_title: string;
  log_page_desc: string;
  log_optimize_btn: string;
  log_telemetry_badge: string;
  log_legend_stops: string;
  log_legend_hub: string;
  log_legend_route: string;
  log_route_tag: string;
  log_route_delivering_to: string;
  log_stops_header: string;
  log_stop_pickup: string;
  log_stop_delivery: string;
  log_batch_unloading: string;
  log_fact_distance: string;
  log_fact_load: string;
  log_fact_stops: string;
  log_fact_time: string;
  log_btn_pickup: string;
  log_btn_transit: string;
  log_btn_deliver: string;
  log_status_delivered: string;

  // Analytics Page
  ana_page_tag: string;
  ana_page_title: string;
  ana_page_desc: string;
  ana_kpi_farmers: string;
  ana_kpi_farmers_sub: string;
  ana_kpi_buyers: string;
  ana_kpi_buyers_sub: string;
  ana_kpi_traded: string;
  ana_kpi_traded_sub: string;
  ana_kpi_distance: string;
  ana_kpi_distance_sub: string;
  ana_chart_velocity_title: string;
  ana_chart_velocity_tag: string;
  ana_chart_demand_title: string;
  ana_chart_demand_tag: string;

  // Demo Page
  demo_eyebrow: string;
  demo_title: string;
  demo_desc: string;
  demo_step1_title: string;
  demo_step1_desc: string;
  demo_step2_title: string;
  demo_step2_desc: string;
  demo_step3_title: string;
  demo_step3_desc: string;
  demo_step4_title: string;
  demo_step4_desc: string;
  demo_step5_title: string;
  demo_step5_desc: string;
  demo_step6_title: string;
  demo_step6_desc: string;
  demo_step7_title: string;
  demo_step7_desc: string;
  demo_step8_title: string;
  demo_step8_desc: string;
  demo_btn_init: string;
  demo_btn_processing: string;
  demo_btn_next: string;
  demo_completion_msg: string;
  demo_btn_reset: string;

  // Real Map Popups
  map_popup_lot: string;
  map_popup_hub: string;
  map_popup_central_hub: string;
  map_popup_qty: string;
  map_popup_price: string;
  map_popup_punjab: string;

  // Rich Story & Landing
  landing_kicker: string;
  landing_proof_direct: string;
  landing_proof_markup: string;
  landing_proof_route: string;
  landing_net_live_match: string;
  landing_net_signals: string;
  landing_net_supply: string;
  landing_net_farms: string;
  landing_net_demand: string;
  landing_net_buyers: string;
  landing_net_route: string;
  landing_net_pooled: string;
  landing_signal_demand: string;
  landing_signal_fresh: string;
  landing_status_dispatch: string;
  landing_status_crop: string;
  landing_status_ready: string;
  landing_scroll_cue: string;
  landing_story_kicker: string;
  landing_story_title: string;
  landing_story_desc: string;
  landing_step1_kicker: string;
  landing_step1_title: string;
  landing_step1_desc: string;
  landing_step1_label: string;
  landing_step1_chart_title: string;
  landing_live_pill: string;
  landing_step2_kicker: string;
  landing_step2_title: string;
  landing_step2_desc: string;
  landing_step2_label: string;
  landing_step2_cluster_title: string;
  landing_step3_kicker: string;
  landing_step3_title: string;
  landing_step3_desc: string;
  landing_step3_label: string;
  landing_step3_route_title: string;
  landing_impact_kicker: string;
  landing_impact_title: string;
  landing_impact_desc: string;
  landing_stat_acc: string;
  landing_stat_transit: string;
  landing_stat_miles: string;
  landing_stat_markup_label: string;
  landing_aud_farmers: string;
  landing_aud_farmers_sub: string;
  landing_aud_buyers: string;
  landing_aud_buyers_sub: string;
  landing_aud_trucks: string;
  landing_aud_trucks_sub: string;
  landing_cta_kicker: string;
  landing_cta_title: string;
  landing_cta_sub: string;
  landing_cta_demo_btn: string;
  landing_cta_farmer_btn: string;

  // Additional Dashboard Keys
  dash_loading_telemetry: string;
  dash_no_fields: string;
  dash_next_week: string;
  dash_chart_demand: string;

  // Additional Logistics Keys
  log_empty_title: string;
  log_empty_desc: string;
  log_empty_cta: string;
  log_updating: string;
  log_batch_title: string;

  // Additional Analytics Keys
  ana_chart_orders: string;
  ana_chart_demand: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    nav_marketplace: 'Marketplace',
    nav_farmer_hub: 'Farmer Hub & Map',
    nav_logistics: 'Smart Logistics',
    nav_analytics: 'Analytics',
    nav_demo: 'Run Live Demo',

    crop_tomato: 'Tomato',
    crop_onion: 'Onion',
    crop_potato: 'Potato',
    crop_wheat: 'Wheat',
    crop_rice: 'Rice',
    all_crops: 'All Crops',

    loc_mohali: 'Mohali',
    loc_chandigarh: 'Chandigarh',
    loc_patiala: 'Patiala',
    loc_ludhiana: 'Ludhiana',
    loc_delhi: 'Delhi',

    unit_kg: 'kg',
    unit_per_kg: '/kg',
    available_supply: 'Available Supply',
    harvest_date: 'Harvest Date',
    locate_btn: 'Locate',
    focused_btn: 'Focused on Map',
    verified_farm: 'Verified Farm',
    order_btn_short: 'Order',
    loading: 'Loading…',

    footer_desc:
      'Autonomous agricultural demand forecasting, multi-farmer aggregation, and pooled green logistics.',
    footer_badge1: 'Linear Regression Trend Engine',
    footer_badge2: 'Verified Direct Farmer Supply',
    footer_copyright: 'FasalBridge AI · Production-Ready Agri-Tech Architecture',

    landing_eyebrow: '✦ NEXT-GEN DIRECT AGRI-MARKETPLACE',
    landing_title_1: 'Predict demand.',
    landing_title_2: 'Connect directly.',
    landing_title_3: 'Deliver smarter.',
    landing_desc:
      'FasalBridge AI bridges farmers, FPOs, and bulk buyers using predictive machine learning and pooled multi-farm green logistics. Minimize post-harvest loss and eliminate middleman friction.',
    landing_cta_marketplace: 'Explore Marketplace',
    landing_cta_farmer: 'Farmer Hub & Live Map',
    landing_cta_demo: 'Run Live Demo',
    flow_farmer: 'Farmer / FPO',
    flow_match: 'AI Match',
    flow_logistics: 'Pooled Route',
    flow_buyer: 'Buyer Delivery',
    feature_forecast_title: 'AI Demand Forecasting',
    feature_forecast_desc:
      'Turn historical consumer and wholesale orders into actionable weekly harvest recommendations using linear trend modeling.',
    feature_gis_title: 'Live GIS Regional Mapping',
    feature_gis_desc:
      'Explore verified farm coordinates, soil and harvest statuses, and local cluster availability on an interactive OpenStreetMap engine.',
    feature_logistics_title: 'Pooled Green Logistics',
    feature_logistics_desc:
      'Automatically aggregate multiple smallholder lots along an optimized nearest-neighbor route, cutting transit costs by up to 32%.',
    stat_accuracy: '94%',
    stat_accuracy_sub: 'Forecast Accuracy',
    stat_markup: '0%',
    stat_markup_sub: 'Platform Markup',
    stat_hubs: '5 Hubs',
    stat_hubs_sub: 'Punjab & NCR Coverage',
    stat_miles: '35%',
    stat_miles_sub: 'Lower Food Miles',

    dash_tag: 'FARMER & FPO INTELLIGENCE HUB',
    dash_title: 'Good morning, Harpreet.',
    dash_desc:
      'Real-time harvest supply positioning, live GIS farm field telemetry, and predictive demand analytics.',
    dash_list_produce_btn: 'List Fresh Produce',
    dash_kpi_listings: 'ACTIVE FIELD LOTS',
    dash_kpi_listings_sub: 'Verified GPS geo-tagged',
    dash_kpi_orders: 'COMMITTED ORDERS',
    dash_kpi_orders_sub: 'Pooled pickup routes',
    dash_kpi_demand: 'PROJECTED DEMAND',
    dash_kpi_demand_growth: 'expected growth',
    dash_kpi_harvest: 'RECOMMENDED HARVEST',
    dash_kpi_harvest_sub: 'Buffered for zero spoilage',
    dash_forecast_tag: 'AI DEMAND PREDICTION',
    dash_forecast_sub: 'Extrapolated weekly demand using scikit-learn linear trend modeling.',
    dash_confidence: 'Confidence',
    dash_disclaimer: 'AI decision support — not a guarantee of sale or price.',
    dash_opp_tag: 'REGIONAL OPPORTUNITY',
    dash_opp_title: 'Punjab & Delhi Corridor',
    dash_opp_note: 'Elevated demand from bulk institutional buyers in Chandigarh & Delhi.',
    dash_opp_tip: '💡 Tip: Grade A lots with scheduled harvest dates within 4-7 days receive 15% faster matching.',
    dash_opp_link: 'List your produce lot',
    dash_gis_badge: 'GIS SUPPLY TELEMETRY',
    dash_gis_title: 'Live Regional Farm Map',
    dash_gis_subtitle:
      'Explore authentic geolocated farm lots across Mohali, Patiala, Ludhiana, Chandigarh, and Delhi. Click any farm marker or use the "Locate" button on field cards below to inspect lots.',
    dash_focus_banner_title: 'Targeting Farm:',
    dash_reset_focus: 'Reset Map View',
    dash_inventory_badge: 'ACTIVE HARVEST INVENTORY',
    dash_inventory_title: 'Field Lots',
    dash_inventory_subtitle:
      'Field cards showing verified farmer profiles, available supply, quality grading, and GPS telemetry.',

    form_page_tag: 'FARMER SUPPLY ONBOARDING',
    form_page_title: 'List your fresh produce lot.',
    form_page_desc:
      'Define harvest specifications and transparent pricing so nearby buyers can discover and aggregate your supply.',
    form_crop_label: 'Crop Type',
    form_qty_label: 'Total Quantity (kg)',
    form_price_label: 'Price per kg (₹ INR)',
    form_location_label: 'Farm District / Hub',
    form_grade_label: 'Quality Grade',
    form_grade_a: 'Grade A (Export / Premium Retail)',
    form_grade_b: 'Grade B (Standard Wholesale / Processing)',
    form_date_label: 'Expected Harvest Date',
    form_submit_btn: 'Publish Farm Listing',
    form_submitting_btn: 'Publishing…',
    form_success_msg: 'Listing published successfully! Redirecting to marketplace…',
    form_preview_tag: 'LIVE LISTING PREVIEW',
    form_preview_title: 'Field Summary Card',
    form_preview_sub: 'How buyers will discover your lot in the marketplace:',
    form_preview_volume: 'Available Volume',
    form_preview_price: 'Direct Farmer Price',
    form_preview_footer: '📍 Verified coordinates mapped automatically',

    market_page_tag: 'BUYER SOURCING MARKETPLACE',
    market_page_title: 'Source closer. Know more.',
    market_page_desc:
      'Discover verified farm lots with zero middleman markups and transparent pooled delivery sequencing.',
    market_search_placeholder: 'Search by crop, farmer name, or regional hub (e.g. Mohali, Patiala)...',
    market_no_results: 'No produce matching your filter',
    market_no_results_sub: 'Try selecting a different crop or clearing your search query.',
    market_available_from: 'available from',

    order_page_tag: 'BUYER DEMAND FULFILLMENT',
    order_page_title_new: 'Specify procurement requirements.',
    order_page_title_result: 'Optimal supply match confirmed.',
    order_page_desc_new:
      'FasalBridge AI matches your bulk demand directly against available farm lots to optimize freshness and transit cost.',
    order_page_desc_result:
      'Your bulk order has been pooled across verified nearby farmers with an automated green logistics route.',
    order_crop_label: 'Required Crop',
    order_quantity_label: 'Procurement Quantity (kg)',
    order_destination_label: 'Delivery Destination',
    order_date_label: 'Required Delivery Date',
    order_submit_btn: 'Find Smart Farm Matches',
    order_submitting_btn: 'Calculating Optimal Farm Match…',
    order_result_badge: 'AI-ASSISTED MATCH',
    order_result_code: 'Order #',
    order_farmers_pooled: 'farmers pooled',
    order_breakdown_title: 'Direct Cost & Logistics Breakdown',
    order_col_item: 'Component',
    order_col_rate: 'Rate (₹/kg)',
    order_col_amount: 'Subtotal (₹)',
    order_produce_farmer_subtotal: 'Farmer Produce Value (Direct Payout)',
    order_produce_subtext: 'Direct payment across farm lots without intermediary deductions',
    order_logistics_fee: 'Green Pooled Logistics & Handling',
    order_logistics_subtext: 'Consolidated farm-to-hub nearest-neighbor transport',
    order_platform_fee: 'Platform Service Fee (0.3%, max ₹200)',
    order_total_landed_payable: 'Total Landed Order Amount',
    order_effective_landed_rate: 'Effective Landed Price',
    order_view_route_btn: 'View Pooled Pickup Route',
    order_farmer_price_note: '100% of produce amount is disbursed directly to farmers without broker cuts.',
    order_platform_fee_badge: '0.3% Platform fee capped at max ₹200 applied',
    order_cap_applied_badge: 'Max ₹200 Cap Applied',
    order_rate_applied_badge: '0.3% Applied',

    log_page_tag: 'SMART POOLED LOGISTICS DISPATCH',
    log_page_title: 'Deliver more with every green route.',
    log_page_desc:
      'Nearby smallholder farm lots are dynamically aggregated into an optimal single-truck pickup sequence.',
    log_optimize_btn: 'Optimize Routing Sequence',
    log_telemetry_badge: 'INTERACTIVE ROUTE TELEMETRY',
    log_legend_stops: 'Farm Pickup Stops',
    log_legend_hub: 'Buyer Fulfillment Hub',
    log_legend_route: 'Nearest-Neighbor Pooled Route',
    log_route_tag: 'POOLED ROUTE #',
    log_route_delivering_to: 'Delivering to',
    log_stops_header: 'Stop Sequence',
    log_stop_pickup: 'Pickup',
    log_stop_delivery: 'Final Delivery',
    log_batch_unloading: 'Consolidated batch unloading',
    log_fact_distance: 'Total Distance',
    log_fact_load: 'Aggregated Load',
    log_fact_stops: 'Total Stops',
    log_fact_time: 'Est. Time',
    log_btn_pickup: 'Start Pickup Route',
    log_btn_transit: 'Mark in Transit to Hub',
    log_btn_deliver: 'Confirm Final Delivery',
    log_status_delivered: 'Route Completed & Produce Delivered',

    ana_page_tag: 'SYSTEM-WIDE PLATFORM TELEMETRY',
    ana_page_title: 'The agricultural bridge, in numbers.',
    ana_page_desc:
      'Transparent metrics illustrating supply resilience, farmer disintermediation, and logistics efficiency.',
    ana_kpi_farmers: 'ONBOARDED FARMERS',
    ana_kpi_farmers_sub: 'Direct smallholders & FPOs',
    ana_kpi_buyers: 'REGISTERED BUYERS',
    ana_kpi_buyers_sub: 'Wholesale & retail chains',
    ana_kpi_traded: 'PRODUCE TRADED',
    ana_kpi_traded_sub: '100% direct transactions',
    ana_kpi_distance: 'AVG DELIVERY DISTANCE',
    ana_kpi_distance_sub: 'Localized supply radius',
    ana_chart_velocity_title: 'Weekly Orders Velocity',
    ana_chart_velocity_tag: 'TREND ANALYSIS',
    ana_chart_demand_title: 'Demand Distribution by Crop',
    ana_chart_demand_tag: 'HISTORICAL VOLUME',

    demo_eyebrow: '✦ LIVE HACKATHON DEMONSTRATION',
    demo_title: 'From demand signal to delivered harvest.',
    demo_desc:
      'Witness how FasalBridge AI coordinates discovery, multi-farmer aggregation, green logistics, and predictive feedback in real time.',
    demo_step1_title: 'Buyer submits procurement requirement',
    demo_step1_desc: 'Wholesale buyer in Chandigarh requests 3,500 kg fresh Grade A Tomatoes.',
    demo_step2_title: 'AI executes multi-farmer supply discovery',
    demo_step2_desc: 'FasalBridge AI scans available verified farm lots in Mohali & Patiala.',
    demo_step3_title: 'Demand is pooled across nearby farms',
    demo_step3_desc: 'Supply dynamically matched: Harpreet (1,500 kg), Gurpreet (1,200 kg), Ravi (800 kg).',
    demo_step4_title: 'Automated pooled pickup route is generated',
    demo_step4_desc: 'Route created with 3 farm pickup stops and 1 delivery hub destination.',
    demo_step5_title: 'Nearest-neighbor route sequencing applied',
    demo_step5_desc: 'Stops ordered geographically to minimize empty-truck return mileage by 28%.',
    demo_step6_title: 'Produce batch picked up and marked in transit',
    demo_step6_desc: 'Batch verified for quality grade upon aggregation into refrigerated truck.',
    demo_step7_title: 'Final delivery confirmed at Chandigarh Hub',
    demo_step7_desc: 'Order marked DELIVERED; payment cleared directly to farmer accounts at 0% fee.',
    demo_step8_title: 'Feedback loop: Demand history updated',
    demo_step8_desc: 'Delivered volume logged into historical dataset; Linear regression forecast updated.',
    demo_btn_init: 'Initialize Live Demo',
    demo_btn_processing: 'Processing Step…',
    demo_btn_next: 'Continue Next Step',
    demo_completion_msg: 'FasalBridge AI Loop Complete — Autonomous Logistics & Forecast Refreshed!',
    demo_btn_reset: 'Re-run Demonstration',

    map_popup_lot: 'FARM LOT #',
    map_popup_hub: 'DELIVERY DESTINATION',
    map_popup_central_hub: 'Central Fulfillment Hub',
    map_popup_qty: 'Quantity',
    map_popup_price: 'Price',
    map_popup_punjab: 'Punjab',

    landing_kicker: 'India’s intelligent farm-to-market bridge',
    landing_proof_direct: 'Direct farmer supply',
    landing_proof_markup: 'Zero platform markup',
    landing_proof_route: 'Live route visibility',
    landing_net_live_match: 'Live match',
    landing_net_signals: '12 signals aligned',
    landing_net_supply: 'SUPPLY',
    landing_net_farms: '4 nearby farms',
    landing_net_demand: 'DEMAND',
    landing_net_buyers: '2 verified buyers',
    landing_net_route: 'ROUTE',
    landing_net_pooled: '86 km pooled',
    landing_signal_demand: 'Demand +18.4%',
    landing_signal_fresh: 'Freshness protected',
    landing_status_dispatch: 'Next dispatch',
    landing_status_crop: 'Tomatoes · Grade A',
    landing_status_ready: '2,480 kg ready for pickup',
    landing_scroll_cue: 'Follow the harvest',
    landing_story_kicker: 'ONE HARVEST. ONE CONNECTED JOURNEY.',
    landing_story_title: 'Good produce should never lose value between the field and the buyer.',
    landing_story_desc:
      'Today, fragmented demand, small lots, and disconnected transport turn good harvests into waste. FasalBridge connects every decision in one continuous flow.',
    landing_step1_kicker: 'See what is coming',
    landing_step1_title: 'Demand becomes a signal, not a surprise.',
    landing_step1_desc:
      'FasalBridge reads buying patterns and turns them into clear, local crop demand—before the harvest leaves the field.',
    landing_step1_label: 'tomato demand next week',
    landing_step1_chart_title: '7-day demand signal',
    landing_live_pill: 'LIVE',
    landing_step2_kicker: 'Connect every acre',
    landing_step2_title: 'Small harvests become market-ready supply.',
    landing_step2_desc:
      'Nearby farmers and FPOs are matched by crop, grade, timing, and location—building one reliable lot for the right buyer.',
    landing_step2_label: 'pooled into one buyer order',
    landing_step2_cluster_title: 'Matched supply cluster',
    landing_step3_kicker: 'Move as one',
    landing_step3_title: 'One smart route replaces many costly trips.',
    landing_step3_desc:
      'A pooled pickup plan reduces empty kilometres, protects freshness, and gives every participant a shared live view.',
    landing_step3_label: 'estimated transport cost',
    landing_step3_route_title: 'Optimized pickup route',
    landing_impact_kicker: 'THE BRIDGE CREATES VALUE AT EVERY STEP',
    landing_impact_title: 'Better margins. Fresher food. Fewer wasted miles.',
    landing_impact_desc:
      'One connected system gives every participant more confidence—from planting decisions to final delivery.',
    landing_stat_acc: 'forecast accuracy',
    landing_stat_transit: 'lower transit cost',
    landing_stat_miles: 'fewer food miles',
    landing_stat_markup_label: 'platform markup',
    landing_aud_farmers: 'Farmers',
    landing_aud_farmers_sub: 'plan with real demand',
    landing_aud_buyers: 'Buyers',
    landing_aud_buyers_sub: 'source with confidence',
    landing_aud_trucks: 'Transporters',
    landing_aud_trucks_sub: 'move fuller loads',
    landing_cta_kicker: 'YOUR NEXT HARVEST CAN MOVE SMARTER',
    landing_cta_title: 'Ready to cross the bridge?',
    landing_cta_sub:
      'Step into the live FasalBridge network and see supply, demand, and delivery come together.',
    landing_cta_demo_btn: 'Run the live demo',
    landing_cta_farmer_btn: 'Open Farmer Hub',

    dash_loading_telemetry: 'Loading real field telemetry…',
    dash_no_fields: 'No active fields found for',
    dash_next_week: 'Next Week (AI)',
    dash_chart_demand: 'Demand',

    log_empty_title: 'No active logistics routes',
    log_empty_desc:
      'Place an order from the marketplace or execute the demo flow to generate a pooled route.',
    log_empty_cta: 'Visit Marketplace',
    log_updating: 'Updating Status…',
    log_batch_title: 'Bulk Batch',

    ana_chart_orders: 'Orders',
    ana_chart_demand: 'Demand',
  },

  hi: {
    nav_marketplace: 'मंडी (बाज़ार)',
    nav_farmer_hub: 'किसान हब व नक्शा',
    nav_logistics: 'स्मार्ट लॉजिस्टिक्स',
    nav_analytics: 'एनालिटिक्स',
    nav_demo: 'लाइव डेमो चलाएं',

    crop_tomato: 'टमाटर',
    crop_onion: 'प्याज़',
    crop_potato: 'आलू',
    crop_wheat: 'गेहूं',
    crop_rice: 'चावल',
    all_crops: 'सभी फसलें',

    loc_mohali: 'मोहाली',
    loc_chandigarh: 'चंडीगढ़',
    loc_patiala: 'पटियाला',
    loc_ludhiana: 'लुधियाना',
    loc_delhi: 'दिल्ली',

    unit_kg: 'किग्रा',
    unit_per_kg: '/किग्रा',
    available_supply: 'उपलब्ध आपूर्ति',
    harvest_date: 'कटाई की तिथि',
    locate_btn: 'नक्शे पर खोजें',
    focused_btn: 'नक्शे पर केंद्रित',
    verified_farm: 'सत्यापित खेत',
    order_btn_short: 'ऑर्डर करें',
    loading: 'लोड हो रहा है…',

    footer_desc:
      'स्वायत्त कृषि मांग पूर्वानुमान, बहु-किसान पूलिंग और हरित साझा लॉजिस्टिक्स।',
    footer_badge1: 'रैखिक प्रतिगमन ट्रेंड इंजन',
    footer_badge2: 'सत्यापित प्रत्यक्ष किसान आपूर्ति',
    footer_copyright: 'फसलब्रिज AI · उत्पादन-तैयार कृषि तकनीक वास्तुकला',

    landing_eyebrow: '✦ अगली पीढ़ी का सीधा कृषि-बाज़ार',
    landing_title_1: 'मांग का पूर्वानुमान।',
    landing_title_2: 'सीधा संपर्क।',
    landing_title_3: 'स्मार्ट डिलीवरी।',
    landing_desc:
      'फसलब्रिज AI कृत्रिम बुद्धिमत्ता और साझा ग्रीन लॉजिस्टिक्स के माध्यम से किसानों, एफपीओ और थोक खरीदारों को सीधे जोड़ता है। फसल कटाई के बाद के नुकसान और दलालों के हस्तक्षेप को समाप्त करें।',
    landing_cta_marketplace: 'मंडी में जाएं',
    landing_cta_farmer: 'किसान हब व लाइव नक्शा',
    landing_cta_demo: 'लाइव डेमो चलाएं',
    flow_farmer: 'किसान / एफपीओ',
    flow_match: 'AI मिलान',
    flow_logistics: 'पूल्ड रूट',
    flow_buyer: 'खरीदार डिलीवरी',
    feature_forecast_title: 'AI मांग पूर्वानुमान',
    feature_forecast_desc:
      'रैखिक ट्रेंड मॉडलिंग के उपयोग से ऐतिहासिक थोक व खुदरा ऑर्डरों को साप्ताहिक कटाई सुझावों में बदलें।',
    feature_gis_title: 'लाइव जीआईएस क्षेत्रीय मैपिंग',
    feature_gis_desc:
      'ओपनस्ट्रीटमैप इंजन पर सत्यापित खेत निर्देशांक, फसल स्थिति और स्थानीय उपलब्धता का अन्वेषण करें।',
    feature_logistics_title: 'पूल्ड ग्रीन लॉजिस्टिक्स',
    feature_logistics_desc:
      'निकटतम-पड़ोसी मार्ग से छोटे किसानों के लॉट स्वतः एकत्र करें, जिससे परिवहन लागत 32% तक घटती है।',
    stat_accuracy: '94%',
    stat_accuracy_sub: 'पूर्वानुमान सटीकता',
    stat_markup: '0%',
    stat_markup_sub: 'प्लेटफॉर्म बिचौलिया कटौती',
    stat_hubs: '5 प्रमुख केंद्र',
    stat_hubs_sub: 'पंजाब व एनसीआर कवरेज',
    stat_miles: '35%',
    stat_miles_sub: 'कम खाद्य परिवहन दूरी',

    dash_tag: 'किसान एवं एफपीओ सूचना केंद्र',
    dash_title: 'सुप्रभात, हरप्रीत जी।',
    dash_desc:
      'वास्तविक समय की आपूर्ति स्थिति, लाइव जीआईएस फार्म टेलीमेट्री और भविष्य कहने वाली मांग विश्लेषण।',
    dash_list_produce_btn: 'ताज़ा फसल सूचीबद्ध करें',
    dash_kpi_listings: 'सक्रिय खेत लॉट',
    dash_kpi_listings_sub: 'सत्यापित जीपीएस टैग किए गए',
    dash_kpi_orders: 'पुष्टि किए गए ऑर्डर',
    dash_kpi_orders_sub: 'पूल्ड पिकअप मार्ग',
    dash_kpi_demand: 'अनुमानित मांग',
    dash_kpi_demand_growth: 'अपेक्षित वृद्धि',
    dash_kpi_harvest: 'सुझाई गई कटाई',
    dash_kpi_harvest_sub: 'शून्य खराबी के लिए सुरक्षित',
    dash_forecast_tag: 'AI मांग भविष्यवाणी',
    dash_forecast_sub: 'साइकिलिट-लर्न लीनियर ट्रेंड मॉडलिंग का उपयोग करके अनुमानित साप्ताहिक मांग।',
    dash_confidence: 'विश्वसनीयता',
    dash_disclaimer: 'AI निर्णय सहायता — बिक्री या मूल्य की गारंटी नहीं।',
    dash_opp_tag: 'क्षेत्रीय अवसर',
    dash_opp_title: 'पंजाब और दिल्ली गलियारा',
    dash_opp_note: 'चंडीगढ़ और दिल्ली के थोक खरीदारों से भारी मांग प्राप्त हो रही है।',
    dash_opp_tip: '💡 सुझाव: 4-7 दिनों के भीतर कटाई वाले ग्रेड ए लॉट 15% अधिक तेज़ी से बिकते हैं।',
    dash_opp_link: 'अपनी फसल सूचीबद्ध करें',
    dash_gis_badge: 'जीआईएस आपूर्ति टेलीमेट्री',
    dash_gis_title: 'लाइव क्षेत्रीय फार्म नक्शा',
    dash_gis_subtitle:
      'मोहाली, पटियाला, लुधियाना, चंडीगढ़ और दिल्ली के खेतों का नक्शा देखें। विवरण देखने के लिए किसी भी फार्म मार्कर पर क्लिक करें।',
    dash_focus_banner_title: 'लक्षित खेत:',
    dash_reset_focus: 'संपूर्ण नक्शा देखें',
    dash_inventory_badge: 'सक्रिय फसल इन्वेंट्री',
    dash_inventory_title: 'खेत लॉट',
    dash_inventory_subtitle:
      'सत्यापित किसान प्रोफाइल, उपलब्ध मात्रा, ग्रेडिंग और जीपीएस निर्देशांक प्रदर्शित करने वाले कार्ड।',

    form_page_tag: 'किसान फसल सूचीकरण',
    form_page_title: 'अपनी ताज़ा फसल सूचीबद्ध करें।',
    form_page_desc:
      'फसल का विवरण और पारदर्शी मूल्य निर्धारित करें ताकि पास के थोक खरीदार आपकी उपज खरीद सकें।',
    form_crop_label: 'फसल का प्रकार',
    form_qty_label: 'कुल मात्रा (किलोग्राम)',
    form_price_label: 'प्रति किग्रा मूल्य (₹ INR)',
    form_location_label: 'फार्म जिला / केंद्र',
    form_grade_label: 'गुणवत्ता ग्रेड',
    form_grade_a: 'ग्रेड ए (प्रीमियम / निर्यात योग्य)',
    form_grade_b: 'ग्रेड बी (मानक थोक / प्रसंस्करण)',
    form_date_label: 'अपेक्षित कटाई तिथि',
    form_submit_btn: 'खेत सूची प्रकाशित करें',
    form_submitting_btn: 'प्रकाशित हो रहा है…',
    form_success_msg: 'सूची सफलतापूर्वक प्रकाशित हो गई! मंडी की ओर जा रहे हैं…',
    form_preview_tag: 'लाइव सूची पूर्वावलोकन',
    form_preview_title: 'खेत सारांश कार्ड',
    form_preview_sub: 'मंडी में खरीदार आपकी फसल इस प्रकार देखेंगे:',
    form_preview_volume: 'उपलब्ध मात्रा',
    form_preview_price: 'सीधा किसान मूल्य',
    form_preview_footer: '📍 सत्यापित निर्देशांक स्वचालित रूप से मैप किए गए',

    market_page_tag: 'थोक खरीदार मंडी',
    market_page_title: 'पास से खरीदें। सब कुछ जानें।',
    market_page_desc:
      'शून्य बिचौलिया शुल्क और पारदर्शी डिलीवरी के साथ सत्यापित स्थानीय खेतों से सीधे फसल खरीदें।',
    market_search_placeholder: 'फसल, किसान का नाम या जिला खोजें (उदा. मोहाली, पटियाला)...',
    market_no_results: 'कोई फसल नहीं मिली',
    market_no_results_sub: 'कृपया अन्य फसल चुनें या खोज शब्द बदलें।',
    market_available_from: 'उपलब्ध कराने वाले किसान:',

    order_page_tag: 'खरीदार मांग पूर्ति',
    order_page_title_new: 'खरीद आवश्यकताएं दर्ज करें।',
    order_page_title_result: 'इष्टतम आपूर्ति मैच सफलतापूर्वक तैयार।',
    order_page_desc_new:
      'फसलब्रिज AI आपकी थोक मांग को सीधे उपलब्ध खेत लॉट से जोड़ता है ताकि ताजगी बनी रहे और परिवहन लागत कम हो।',
    order_page_desc_result:
      'आपका थोक ऑर्डर पास के सत्यापित किसानों से पूल किया गया है और स्वचालित ग्रीन लॉजिस्टिक्स मार्ग तैयार है।',
    order_crop_label: 'आवश्यक फसल',
    order_quantity_label: 'खरीद मात्रा (किलोग्राम)',
    order_destination_label: 'डिलीवरी गंतव्य',
    order_date_label: 'डिलीवरी की तिथि',
    order_submit_btn: 'स्मार्ट फार्म मैच खोजें',
    order_submitting_btn: 'इष्टतम फार्म मिलान की गणना जारी…',
    order_result_badge: 'AI-सहायक आपूर्ति मैच',
    order_result_code: 'ऑर्डर #',
    order_farmers_pooled: 'किसान शामिल',
    order_breakdown_title: 'पारदर्शी मूल्य एवं लॉजिस्टिक्स विवरण',
    order_col_item: 'मद विवरण',
    order_col_rate: 'दर (₹/किग्रा)',
    order_col_amount: 'कुल राशि (₹)',
    order_produce_farmer_subtotal: 'किसान फसल मूल्य (प्रत्यक्ष भुगतान)',
    order_produce_subtext: 'बिना किसी बिचौलिया कटौती के सीधे किसान खातों में भुगतान',
    order_logistics_fee: 'ग्रीन पूल्ड लॉजिस्टिक्स व हैंडलिंग',
    order_logistics_subtext: 'खेतों से हब तक एकीकृत निकटतम-पड़ोसी परिवहन',
    order_platform_fee: 'प्लेटफॉर्म सेवा शुल्क (0.3%, अधिकतम ₹200)',
    order_total_landed_payable: 'कुल देय लैंडेड राशि',
    order_effective_landed_rate: 'प्रभावी लैंडेड मूल्य',
    order_view_route_btn: 'पूल्ड पिकअप रूट देखें',
    order_farmer_price_note: 'फसल की 100% राशि बिना किसी दलाल कटौती के सीधे किसानों को दी जाती है।',
    order_platform_fee_badge: '0.3% प्लेटफॉर्म शुल्क (अधिकतम ₹200 लागू)',
    order_cap_applied_badge: 'अधिकतम ₹200 कैप लागू',
    order_rate_applied_badge: '0.3% लागू',

    log_page_tag: 'स्मार्ट पूल्ड लॉजिस्टिक्स प्रेषण',
    log_page_title: 'हर ग्रीन रूट से अधिक डिलीवरी करें।',
    log_page_desc:
      'आस-पास के किसानों की फसलों को गतिशील रूप से एकल-ट्रक पिकअप अनुक्रम में संयोजित किया जाता है।',
    log_optimize_btn: 'रूट क्रम को अनुकूलित करें',
    log_telemetry_badge: 'इंटरैक्टिव रूट टेलीमेट्री',
    log_legend_stops: 'खेत पिकअप स्टॉप',
    log_legend_hub: 'खरीदार डिलीवरी हब',
    log_legend_route: 'निकटतम-पड़ोसी पूल्ड रूट',
    log_route_tag: 'पूल्ड रूट #',
    log_route_delivering_to: 'डिलीवरी गंतव्य',
    log_stops_header: 'स्टॉप क्रम',
    log_stop_pickup: 'पिकअप',
    log_stop_delivery: 'अंतिम डिलीवरी',
    log_batch_unloading: 'समेकित माल उतराई',
    log_fact_distance: 'कुल दूरी',
    log_fact_load: 'कुल भार',
    log_fact_stops: 'कुल स्टॉप',
    log_fact_time: 'अनुमानित समय',
    log_btn_pickup: 'पिकअप रूट शुरू करें',
    log_btn_transit: 'हब के लिए ट्रांजिट में मार्क करें',
    log_btn_deliver: 'अंतिम डिलीवरी की पुष्टि करें',
    log_status_delivered: 'मार्ग पूर्ण और फसल सफलतापूर्वक वितरित',

    ana_page_tag: 'मंच-व्यापी टेलीमेट्री विश्लेषण',
    ana_page_title: 'कृषि सेतु, आंकड़ों में।',
    ana_page_desc:
      'आपूर्ति लचीलापन, किसान सशक्तिकरण और रसद दक्षता को दर्शाने वाले पारदर्शी आंकड़े।',
    ana_kpi_farmers: 'पंजीकृत किसान',
    ana_kpi_farmers_sub: 'प्रत्यक्ष किसान व एफपीओ',
    ana_kpi_buyers: 'सत्यापित खरीदार',
    ana_kpi_buyers_sub: 'थोक व्यापारी व खुदरा विक्रेता',
    ana_kpi_traded: 'कुल विपणन फसल',
    ana_kpi_traded_sub: '100% प्रत्यक्ष सौदे',
    ana_kpi_distance: 'औसत डिलीवरी दूरी',
    ana_kpi_distance_sub: 'स्थानीय आपूर्ति दायरा',
    ana_chart_velocity_title: 'साप्ताहिक ऑर्डर गति',
    ana_chart_velocity_tag: 'ट्रेंड विश्लेषण',
    ana_chart_demand_title: 'फसल अनुसार मांग वितरण',
    ana_chart_demand_tag: 'ऐतिहासिक मात्रा',

    demo_eyebrow: '✦ लाइव हैकथॉन प्रदर्शन',
    demo_title: 'मांग संकेत से लेकर वितरित उपज तक।',
    demo_desc:
      'देखें कि फसलब्रिज AI किस प्रकार वास्तविक समय में आपूर्ति खोज, बहु-किसान पूलिंग, ग्रीन लॉजिस्टिक्स और पूर्वानुमान का समन्वय करता है।',
    demo_step1_title: 'खरीदार ने मांग आवश्यकता दर्ज की',
    demo_step1_desc: 'चंडीगढ़ के थोक खरीदार ने 3,500 किग्रा ताज़ा ग्रेड ए टमाटर का ऑर्डर दिया।',
    demo_step2_title: 'AI ने क्षेत्रीय फार्मों में आपूर्ति की खोज की',
    demo_step2_desc: 'फसलब्रिज AI ने मोहाली और पटियाला में उपलब्ध सत्यापित खेतों को स्कैन किया।',
    demo_step3_title: 'पास के किसानों के बीच मांग को पूल किया गया',
    demo_step3_desc: 'आपूर्ति मिलान: हरप्रीत (1,500 किग्रा), गुरप्रीत (1,200 किग्रा), रवि (800 किग्रा)।',
    demo_step4_title: 'स्वचालित पूल्ड पिकअप रूट उत्पन्न किया गया',
    demo_step4_desc: '3 फार्म पिकअप स्टॉप और 1 डिलीवरी हब के साथ रूट तैयार किया गया।',
    demo_step5_title: 'निकटतम-पड़ोसी रूट सीक्वेंसिंग लागू की गई',
    demo_step5_desc: 'खाली ट्रक के चक्कर कम करने के लिए भौगोलिक क्रम में स्टॉप्स व्यवस्थित किए गए।',
    demo_step6_title: 'उपज पिकअप कर ट्रांजिट में भेजी गई',
    demo_step6_desc: 'वातानुकूलित वाहन में एकत्र करते समय गुणवत्ता ग्रेड की पुष्टि की गई।',
    demo_step7_title: 'चंडीगढ़ हब पर अंतिम डिलीवरी की पुष्टि',
    demo_step7_desc: 'ऑर्डर डिलीवर हुआ; 0% कटौती पर किसानों के खातों में भुगतान किया गया।',
    demo_step8_title: 'फीडबैक लूप: मांग इतिहास अद्यतन हुआ',
    demo_step8_desc: 'डिलीवर की गई मात्रा डेटाबेस में जुड़ी; AI लीनियर रिग्रेशन मॉडल अपडेट हुआ।',
    demo_btn_init: 'लाइव डेमो प्रारंभ करें',
    demo_btn_processing: 'प्रक्रिया जारी है…',
    demo_btn_next: 'अगला चरण जारी रखें',
    demo_completion_msg: 'फसलब्रिज AI चक्र पूर्ण — स्वायत्त लॉजिस्टिक्स और पूर्वानुमान अद्यतन!',
    demo_btn_reset: 'प्रदर्शन पुनः प्रारंभ करें',

    map_popup_lot: 'खेत लॉट #',
    map_popup_hub: 'डिलीवरी गंतव्य',
    map_popup_central_hub: 'केंद्रीय पूर्ति हब',
    map_popup_qty: 'मात्रा',
    map_popup_price: 'मूल्य',
    map_popup_punjab: 'पंजाब',

    landing_kicker: 'भारत का बुद्धिमान फार्म-टू-मार्केट सेतु',
    landing_proof_direct: 'प्रत्यक्ष किसान आपूर्ति',
    landing_proof_markup: 'शून्य प्लेटफॉर्म बिचौलिया शुल्क',
    landing_proof_route: 'लाइव रूट दृश्यता',
    landing_net_live_match: 'लाइव मिलान',
    landing_net_signals: '12 सिग्नल संरेखित',
    landing_net_supply: 'आपूर्ति',
    landing_net_farms: '4 पास के खेत',
    landing_net_demand: 'मांग',
    landing_net_buyers: '2 सत्यापित खरीदार',
    landing_net_route: 'मार्ग',
    landing_net_pooled: '86 किमी पूल्ड रूट',
    landing_signal_demand: 'मांग +18.4%',
    landing_signal_fresh: 'ताजगी संरक्षित',
    landing_status_dispatch: 'अगला प्रेषण',
    landing_status_crop: 'टमाटर · ग्रेड ए',
    landing_status_ready: '2,480 किग्रा पिकअप के लिए तैयार',
    landing_scroll_cue: 'फसल यात्रा देखें',
    landing_story_kicker: 'एक फसल। एक सतत यात्रा।',
    landing_story_title: 'खेत से खरीदार तक अच्छी उपज का मूल्य कभी कम नहीं होना चाहिए।',
    landing_story_desc:
      'आज, बिखरी मांग और अलग-थलग परिवहन अच्छी उपज को नुकसान में बदल देते हैं। फसलब्रिज हर निर्णय को एक निरंतर प्रवाह में जोड़ता है।',
    landing_step1_kicker: 'आने वाले कल को देखें',
    landing_step1_title: 'मांग एक स्पष्ट संकेत बनती है, कोई आकस्मिक झटका नहीं।',
    landing_step1_desc:
      'फसलब्रिज खरीद पैटर्न को समझकर स्थानीय मांग में बदलता है—फसल के खेत छोड़ने से पहले ही।',
    landing_step1_label: 'अगले सप्ताह टमाटर की मांग',
    landing_step1_chart_title: '7-दिवसीय मांग संकेत',
    landing_live_pill: 'लाइव',
    landing_step2_kicker: 'हर एकड़ को जोड़ें',
    landing_step2_title: 'छोटी कटाई बाज़ार-तैयार थोक आपूर्ति बनती है।',
    landing_step2_desc:
      'पास के किसानों और एफपीओ को फसल, ग्रेड, समय और स्थान के आधार पर जोड़कर एक विश्वसनीय लॉट बनाया जाता है।',
    landing_step2_label: 'एक खरीदार ऑर्डर में पूल्ड',
    landing_step2_cluster_title: 'संयुक्त आपूर्ति क्लस्टर',
    landing_step3_kicker: 'एक साथ आगे बढ़ें',
    landing_step3_title: 'एक समझदार मार्ग कई महंगी यात्राओं की जगह लेता है।',
    landing_step3_desc:
      'साझा पिकअप योजना खाली किलोमीटर घटाती है, ताजगी बचाती है और सभी को साझा लाइव दृश्य प्रदान करती है।',
    landing_step3_label: 'अनुमानित परिवहन बचत',
    landing_step3_route_title: 'अनुकूलित पिकअप मार्ग',
    landing_impact_kicker: 'यह सेतु हर कदम पर मूल्य पैदा करता है',
    landing_impact_title: 'बेहतर मुनाफा। ताज़ा भोजन। कम व्यर्थ यात्रा।',
    landing_impact_desc:
      'एक एकीकृत प्रणाली हर भागीदार को बुवाई से लेकर अंतिम डिलीवरी तक अधिक भरोसा देती है।',
    landing_stat_acc: 'पूर्वानुमान सटीकता',
    landing_stat_transit: 'कम परिवहन लागत',
    landing_stat_miles: 'कम भोजन परिवहन दूरी',
    landing_stat_markup_label: 'प्लेटफॉर्म बिचौलिया शुल्क',
    landing_aud_farmers: 'किसान',
    landing_aud_farmers_sub: 'सटीक मांग के साथ योजना बनाएं',
    landing_aud_buyers: 'खरीदार',
    landing_aud_buyers_sub: 'पूरे विश्वास के साथ खरीद करें',
    landing_aud_trucks: 'ट्रांसपोर्टर',
    landing_aud_trucks_sub: 'पूरी क्षमता से वाहन चलाएं',
    landing_cta_kicker: 'आपकी अगली फसल अधिक समझदारी से बिक सकती है',
    landing_cta_title: 'क्या आप सेतु पार करने के लिए तैयार हैं?',
    landing_cta_sub:
      'लाइव फसलब्रिज नेटवर्क में प्रवेश करें और आपूर्ति, मांग और डिलीवरी का तालमेल देखें।',
    landing_cta_demo_btn: 'लाइव डेमो चलाएं',
    landing_cta_farmer_btn: 'किसान हब खोलें',

    dash_loading_telemetry: 'वास्तविक फार्म टेलीमेट्री लोड हो रही है…',
    dash_no_fields: 'इसके लिए कोई सक्रिय खेत नहीं मिला:',
    dash_next_week: 'अगला सप्ताह (AI)',
    dash_chart_demand: 'मांग',

    log_empty_title: 'कोई सक्रिय लॉजिस्टिक्स रूट नहीं',
    log_empty_desc:
      'मंडी से कोई ऑर्डर दें या पूल्ड रूट उत्पन्न करने के लिए लाइव डेमो चलाएं।',
    log_empty_cta: 'मंडी में जाएं',
    log_updating: 'स्थिति अपडेट हो रही है…',
    log_batch_title: 'थोक बैच',

    ana_chart_orders: 'ऑर्डर',
    ana_chart_demand: 'मांग',
  },

  pa: {
    nav_marketplace: 'ਮੰਡੀ (ਬਾਜ਼ਾਰ)',
    nav_farmer_hub: 'ਕਿਸਾਨ ਹੱਬ ਅਤੇ ਨਕਸ਼ਾ',
    nav_logistics: 'ਸਮਾਰਟ ਲੌਜਿਸਟਿਕਸ',
    nav_analytics: 'ਵਿਸ਼ਲੇਸ਼ਣ',
    nav_demo: 'ਲਾਈਵ ਡੈਮੋ ਚਲਾਓ',

    crop_tomato: 'ਟਮਾਟਰ',
    crop_onion: 'ਪਿਆਜ਼',
    crop_potato: 'ਆਲੂ',
    crop_wheat: 'ਕਣਕ',
    crop_rice: 'ਚੌਲ',
    all_crops: 'ਸਾਰੀਆਂ ਫ਼ਸਲਾਂ',

    loc_mohali: 'ਮੋਹਾਲੀ',
    loc_chandigarh: 'ਚੰਡੀਗੜ੍ਹ',
    loc_patiala: 'ਪਟਿਆਲਾ',
    loc_ludhiana: 'ਲੁਧਿਆਣਾ',
    loc_delhi: 'ਦਿੱਲੀ',

    unit_kg: 'ਕਿਲੋ',
    unit_per_kg: '/ਕਿਲੋ',
    available_supply: 'ਉਪਲਬਧ ਸਪਲਾਈ',
    harvest_date: 'ਵਾਢੀ ਦੀ ਮਿਤੀ',
    locate_btn: 'ਨਕਸ਼ੇ ਤੇ ਲੱਭੋ',
    focused_btn: 'ਨਕਸ਼ੇ ਤੇ ਕੇਂਦਰਿਤ',
    verified_farm: 'ਪ੍ਰਮਾਣਿਤ ਖੇਤ',
    order_btn_short: 'ਆਰਡਰ ਕਰੋ',
    loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ…',

    footer_desc:
      'ਸਵੈਚਾਲਿਤ ਖੇਤੀਬਾੜੀ ਮੰਗ ਦੀ ਭਵਿੱਖਬਾਣੀ, ਬਹੁ-ਕਿਸਾਨ ਏਕੀਕਰਨ, ਅਤੇ ਸਾਂਝੀ ਗ੍ਰੀਨ ਲੌਜਿਸਟਿਕਸ।',
    footer_badge1: 'ਲੀਨੀਅਰ ਰਿਗ੍ਰੇਸ਼ਨ ਰੁਝਾਨ ਇੰਜਨ',
    footer_badge2: 'ਪ੍ਰਮਾਣਿਤ ਸਿੱਧੀ ਕਿਸਾਨ ਸਪਲਾਈ',
    footer_copyright: 'ਫ਼ਸਲਬ੍ਰਿਜ AI · ਉਤਪਾਦਨ-ਤਿਆਰ ਐਗਰੀ-ਟੈੱਕ ਢਾਂਚਾ',

    landing_eyebrow: '✦ ਅਗਲੀ ਪੀੜ੍ਹੀ ਦਾ ਸਿੱਧਾ ਕਿਸਾਨੀ ਬਾਜ਼ਾਰ',
    landing_title_1: 'ਮੰਗ ਦਾ ਅਗਾਊਂ ਅੰਦਾਜ਼ਾ।',
    landing_title_2: 'ਸਿੱਧਾ ਰਾਬਤਾ।',
    landing_title_3: 'ਸਮਾਰਟ ਡਿਲੀਵਰੀ।',
    landing_desc:
      'ਫ਼ਸਲਬ੍ਰਿਜ AI ਸਹੀ ਮੰਗ ਭਵਿੱਖਬਾਣੀ ਅਤੇ ਸਾਂਝੀ ਗ੍ਰੀਨ ਲੌਜਿਸਟਿਕਸ ਦੀ ਮਦਦ ਨਾਲ ਕਿਸਾਨਾਂ, ਐੱਫ.ਪੀ.ਓਜ਼ ਅਤੇ ਵੱਡੇ ਖਰੀਦਦਾਰਾਂ ਨੂੰ ਸਿੱਧਾ ਜੋੜਦਾ ਹੈ। ਫ਼ਸਲ ਖ਼ਰਾਬ ਹੋਣ ਤੋਂ ਬਚਾਓ ਅਤੇ ਵਿਚੋਲਿਆਂ ਦੀ ਕਟੌਤੀ ਖ਼ਤਮ ਕਰੋ।',
    landing_cta_marketplace: 'ਮੰਡੀ ਵੇਖੋ',
    landing_cta_farmer: 'ਕਿਸਾਨ ਹੱਬ ਤੇ ਲਾਈਵ ਨਕਸ਼ਾ',
    landing_cta_demo: 'ਲਾਈਵ ਡੈਮੋ ਵੇਖੋ',
    flow_farmer: 'ਕਿਸਾਨ / ਐੱਫ.ਪੀ.ਓ.',
    flow_match: 'AI ਮੈਚਿੰਗ',
    flow_logistics: 'ਸਾਂਝਾ ਰੂਟ',
    flow_buyer: 'ਖਰੀਦਦਾਰ ਡਿਲੀਵਰੀ',
    feature_forecast_title: 'AI ਮੰਗ ਪੂਰਵ-ਅਨੁਮਾਨ',
    feature_forecast_desc:
      'ਪੁਰਾਣੇ ਆਰਡਰਾਂ ਦੇ ਆਧਾਰ ਤੇ ਹਫ਼ਤਾਵਾਰ ਵਾਢੀ ਅਤੇ ਵਿਕਰੀ ਦੀਆਂ ਸਹੀ ਸਿਫ਼ਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ।',
    feature_gis_title: 'ਲਾਈਵ ਜੀਆਈਐੱਸ ਖੇਤਰੀ ਮੈਪਿੰਗ',
    feature_gis_desc:
      'ਓਪਨਸਟ੍ਰੀਟਮੈਪ ਤੇ ਆਪਣੇ ਇਲਾਕੇ ਦੇ ਪ੍ਰਮਾਣਿਤ ਖੇਤਾਂ, ਫ਼ਸਲਾਂ ਦੀ ਸਥਿਤੀ ਅਤੇ ਉਪਲਬਧਤਾ ਵੇਖੋ।',
    feature_logistics_title: 'ਪੂਲਡ ਗ੍ਰੀਨ ਲੌਜਿਸਟਿਕਸ',
    feature_logistics_desc:
      'ਨੇੜਲੇ ਖੇਤਾਂ ਤੋਂ ਇਕੱਠੀ ਉਪਜ ਇੱਕੋ ਗੱਡੀ ਰਾਹੀਂ ਲਿਆਓ, ਜਿਸ ਨਾਲ ਕਿਰਾਇਆ 32% ਤੱਕ ਘੱਟਦਾ ਹੈ।',
    stat_accuracy: '94%',
    stat_accuracy_sub: 'ਭਵਿੱਖਬਾਣੀ ਸ਼ੁੱਧਤਾ',
    stat_markup: '0%',
    stat_markup_sub: 'ਪਲੇਟਫਾਰਮ ਦਲਾਲੀ ਫੀਸ',
    stat_hubs: '5 ਪ੍ਰਮੁੱਖ ਕੇਂਦਰ',
    stat_hubs_sub: 'ਪੰਜਾਬ ਅਤੇ ਐੱਨਸੀਆਰ ਕਵਰੇਜ',
    stat_miles: '35%',
    stat_miles_sub: 'ਘੱਟ ਢੋਆ-ਢੁਆਈ ਦੂਰੀ',

    dash_tag: 'ਕਿਸਾਨ ਅਤੇ ਐੱਫ.ਪੀ.ਓ. ਜਾਣਕਾਰੀ ਕੇਂਦਰ',
    dash_title: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਹਰਪ੍ਰੀਤ ਜੀ।',
    dash_desc:
      'ਮੌਜੂਦਾ ਫ਼ਸਲ ਉਪਲਬਧਤਾ, ਲਾਈਵ ਜੀਆਈਐੱਸ ਫਾਰਮ ਨਕਸ਼ਾ ਅਤੇ ਮੰਗ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ।',
    dash_list_produce_btn: 'ਤਾਜ਼ੀ ਫ਼ਸਲ ਸੂਚੀਬੱਧ ਕਰੋ',
    dash_kpi_listings: 'ਕਿਰਿਆਸ਼ੀਲ ਖੇਤ ਲਾਟ',
    dash_kpi_listings_sub: 'ਜੀਪੀਐੱਸ ਪ੍ਰਮਾਣਿਤ ਨਕਸ਼ੇ ਤੇ',
    dash_kpi_orders: 'ਪੁਸ਼ਟੀ ਕੀਤੇ ਆਰਡਰ',
    dash_kpi_orders_sub: 'ਸਾਂਝੇ ਪਿਕਅੱਪ ਰੂਟ',
    dash_kpi_demand: 'ਅਨੁਮਾਨਿਤ ਮੰਗ',
    dash_kpi_demand_growth: 'ਸੰਭਾਵਿਤ ਵਾਧਾ',
    dash_kpi_harvest: 'ਸਿਫਾਰਸ਼ ਕੀਤੀ ਵਾਢੀ',
    dash_kpi_harvest_sub: 'ਜ਼ੀਰੋ ਖ਼ਰਾਬੀ ਲਈ ਸੁਰੱਖਿਅਤ',
    dash_forecast_tag: 'AI ਮੰਗ ਦੀ ਭਵਿੱਖਬਾਣੀ',
    dash_forecast_sub: 'ਸਾਈਕਿਟ-ਲਰਨ ਲੀਨੀਅਰ ਮਾਡਲਿੰਗ ਰਾਹੀਂ ਅਗਲੇ ਹਫ਼ਤੇ ਦੀ ਅਨੁਮਾਨਿਤ ਮੰਗ।',
    dash_confidence: 'ਭਰੋਸੇਯੋਗਤਾ',
    dash_disclaimer: 'AI ਫੈਸਲਾ ਸਹਾਇਤਾ — ਵਿਕਰੀ ਜਾਂ ਮੁੱਲ ਦੀ ਗਾਰੰਟੀ ਨਹੀਂ।',
    dash_opp_tag: 'ਖੇਤਰੀ ਮੌਕਾ',
    dash_opp_title: 'ਪੰਜਾਬ ਅਤੇ ਦਿੱਲੀ ਗਲਿਆਰਾ',
    dash_opp_note: 'ਚੰਡੀਗੜ੍ਹ ਅਤੇ ਦਿੱਲੀ ਦੇ ਥੋਕ ਖਰੀਦਦਾਰਾਂ ਤੋਂ ਭਾਰੀ ਮੰਗ ਵੇਖਣ ਨੂੰ ਮਿਲ ਰਹੀ ਹੈ।',
    dash_opp_tip: '💡 ਸਲਾਹ: 4-7 ਦਿਨਾਂ ਅੰਦਰ ਤਿਆਰ ਗ੍ਰੇਡ ਏ ਫ਼ਸਲਾਂ 15% ਤੇਜ਼ੀ ਨਾਲ ਵਿਕਦੀਆਂ ਹਨ।',
    dash_opp_link: 'ਆਪਣੀ ਫ਼ਸਲ ਦਰਜ ਕਰੋ',
    dash_gis_badge: 'ਜੀਆਈਐੱਸ ਸਪਲਾਈ ਟੈਲੀਮੈਟਰੀ',
    dash_gis_title: 'ਲਾਈਵ ਖੇਤਰੀ ਫਾਰਮ ਨਕਸ਼ਾ',
    dash_gis_subtitle:
      'ਮੋਹਾਲੀ, ਪਟਿਆਲਾ, ਲੁਧਿਆਣਾ, ਚੰਡੀਗੜ੍ਹ ਅਤੇ ਦਿੱਲੀ ਦੇ ਖੇਤਾਂ ਦਾ ਨਕਸ਼ਾ ਵੇਖੋ। ਵੇਰਵੇ ਵੇਖਣ ਲਈ ਕਿਸੇ ਵੀ ਖੇਤ ਤੇ ਕਲਿੱਕ ਕਰੋ।',
    dash_focus_banner_title: 'ਚੁਣਿਆ ਗਿਆ ਖੇਤ:',
    dash_reset_focus: 'ਪੂਰਾ ਨਕਸ਼ਾ ਵੇਖੋ',
    dash_inventory_badge: 'ਕਿਰਿਆਸ਼ੀਲ ਫ਼ਸਲ ਇਨਵੈਂਟਰੀ',
    dash_inventory_title: 'ਖੇਤ ਲਾਟ',
    dash_inventory_subtitle:
      'ਪ੍ਰਮਾਣਿਤ ਕਿਸਾਨ, ਉਪਲਬਧ ਮਾਤਰਾ, ਗੁਣਵੱਤਾ ਅਤੇ ਜੀਪੀਐੱਸ ਨਿਰਦੇਸ਼ਾਂਕ ਦਿਖਾਉਣ ਵਾਲੇ ਕਾਰਡ।',

    form_page_tag: 'ਕਿਸਾਨ ਉਪਜ ਦਰਜ ਕਰੋ',
    form_page_title: 'ਆਪਣੀ ਤਾਜ਼ੀ ਫ਼ਸਲ ਦੀ ਸੂਚੀ ਬਣਾਓ।',
    form_page_desc:
      'ਫ਼ਸਲ ਦੀ ਗੁਣਵੱਤਾ ਅਤੇ ਸਾਫ਼ ਕੀਮਤ ਤੈਅ ਕਰੋ ਤਾਂ ਜੋ ਨੇੜਲੇ ਖਰੀਦਦਾਰ ਤੁਹਾਡੀ ਉਪਜ ਆਸਾਨੀ ਨਾਲ ਖਰੀਦ ਸਕਣ।',
    form_crop_label: 'ਫ਼ਸਲ ਦੀ ਕਿਸਮ',
    form_qty_label: 'ਕੁੱਲ ਮਾਤਰਾ (ਕਿਲੋ)',
    form_price_label: 'ਕੀਮਤ ਪ੍ਰਤੀ ਕਿਲੋ (₹ INR)',
    form_location_label: 'ਖੇਤ ਜ਼ਿਲ੍ਹਾ / ਹੱਬ',
    form_grade_label: 'ਗੁਣਵੱਤਾ ਗ੍ਰੇਡ',
    form_grade_a: 'ਗ੍ਰੇਡ ਏ (ਨਿਰਯਾਤ / ਪ੍ਰੀਮੀਅਮ ਮੰਡੀ)',
    form_grade_b: 'ਗ੍ਰੇਡ ਬੀ (ਮਿਆਰੀ ਥੋਕ / ਪ੍ਰੋਸੈਸਿੰਗ)',
    form_date_label: 'ਸੰਭਾਵਿਤ ਵਾਢੀ ਦੀ ਮਿਤੀ',
    form_submit_btn: 'ਖੇਤ ਸੂਚੀ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ',
    form_submitting_btn: 'ਪ੍ਰਕਾਸ਼ਿਤ ਹੋ ਰਿਹਾ ਹੈ…',
    form_success_msg: 'ਫ਼ਸਲ ਸੂਚੀ ਸਫਲਤਾਪੂਰਵਕ ਦਰਜ ਹੋ ਗਈ! ਮੰਡੀ ਵੱਲ ਜਾ ਰਹੇ ਹਾਂ…',
    form_preview_tag: 'ਲਾਈਵ ਸੂਚੀ ਝਲਕ',
    form_preview_title: 'ਖੇਤ ਸੰਖੇਪ ਕਾਰਡ',
    form_preview_sub: 'ਮੰਡੀ ਵਿੱਚ ਖਰੀਦਦਾਰ ਤੁਹਾਡੀ ਉਪਜ ਇਸ ਤਰ੍ਹਾਂ ਵੇਖਣਗੇ:',
    form_preview_volume: 'ਉਪਲਬਧ ਮਾਤਰਾ',
    form_preview_price: 'ਸਿੱਧੀ ਕਿਸਾਨ ਕੀਮਤ',
    form_preview_footer: '📍 ਪ੍ਰਮਾਣਿਤ ਨਿਰਦੇਸ਼ਾਂਕ ਆਪਣੇ-ਆਪ ਨਕਸ਼ੇ ਤੇ ਲਗਾਏ ਗਏ',

    market_page_tag: 'ਥੋਕ ਖਰੀਦਦਾਰ ਮੰਡੀ',
    market_page_title: 'ਨੇੜਿਓਂ ਖਰੀਦੋ। ਪੂਰੀ ਜਾਣਕਾਰੀ ਰੱਖੋ।',
    market_page_desc:
      'ਬਿਨਾਂ ਕਿਸੇ ਵਿਚੋਲੇ ਦੇ ਮੁਨਾਫ਼ੇ ਅਤੇ ਸਾਫ਼ ਸੁਥਰੀ ਡਿਲੀਵਰੀ ਨਾਲ ਸਿੱਧਾ ਕਿਸਾਨਾਂ ਤੋਂ ਫ਼ਸਲਾਂ ਖਰੀਦੋ।',
    market_search_placeholder: 'ਫ਼ਸਲ, ਕਿਸਾਨ ਦਾ ਨਾਮ ਜਾਂ ਜ਼ਿਲ੍ਹਾ ਲੱਭੋ (ਜਿਵੇਂ ਮੋਹਾਲੀ, ਪਟਿਆਲਾ)...',
    market_no_results: 'ਤੁਹਾਡੀ ਖੋਜ ਮੁਤਾਬਕ ਕੋਈ ਫ਼ਸਲ ਨਹੀਂ ਮਿਲੀ',
    market_no_results_sub: 'ਕਿਰਪਾ ਕਰਕੇ ਕੋਈ ਹੋਰ ਫ਼ਸਲ ਚੁਣੋ ਜਾਂ ਖੋਜ ਸ਼ਬਦ ਬਦਲੋ।',
    market_available_from: 'ਉਪਲਬਧ ਕਰਵਾਉਣ ਵਾਲੇ ਕਿਸਾਨ:',

    order_page_tag: 'ਖਰੀਦਦਾਰ ਮੰਗ ਪੂਰਤੀ',
    order_page_title_new: 'ਆਪਣੀ ਖਰੀਦ ਮੰਗ ਦਰਜ ਕਰੋ।',
    order_page_title_result: 'ਸਭ ਤੋਂ ਵਧੀਆ ਸਪਲਾਈ ਮੈਚ ਤਿਆਰ ਹੈ।',
    order_page_desc_new:
      'ਫ਼ਸਲਬ੍ਰਿਜ AI ਤੁਹਾਡੀ ਵੱਡੀ ਮੰਗ ਨੂੰ ਸਿੱਧਾ ਉਪਲਬਧ ਖੇਤਾਂ ਨਾਲ ਜੋੜਦਾ ਹੈ ਤਾਂ ਜੋ ਤਾਜ਼ਗੀ ਰਹੇ ਅਤੇ ਕਿਰਾਇਆ ਘੱਟ ਹੋਵੇ।',
    order_page_desc_result:
      'ਤੁਹਾਡਾ ਥੋਕ ਆਰਡਰ ਨੇੜਲੇ ਪ੍ਰਮਾਣਿਤ ਕਿਸਾਨਾਂ ਤੋਂ ਇਕੱਠਾ ਕੀਤਾ ਗਿਆ ਹੈ ਅਤੇ ਇਕ ਸਾਂਝਾ ਗ੍ਰੀਨ ਰੂਟ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ।',
    order_crop_label: 'ਲੋੜੀਂਦੀ ਫ਼ਸਲ',
    order_quantity_label: 'ਖਰੀਦ ਮਾਤਰਾ (ਕਿਲੋ)',
    order_destination_label: 'ਡਿਲੀਵਰੀ ਟਿਕਾਣਾ',
    order_date_label: 'ਲੋੜੀਂਦੀ ਡਿਲੀਵਰੀ ਮਿਤੀ',
    order_submit_btn: 'ਸਮਾਰਟ ਫਾਰਮ ਮੈਚ ਲੱਭੋ',
    order_submitting_btn: 'ਸਭ ਤੋਂ ਵਧੀਆ ਫਾਰਮ ਮੈਚ ਦੀ ਗਣਨਾ ਜਾਰੀ…',
    order_result_badge: 'AI-ਸਹਾਇਕ ਮੈਚ',
    order_result_code: 'ਆਰਡਰ ਨੰਬਰ #',
    order_farmers_pooled: 'ਕਿਸਾਨ ਸ਼ਾਮਲ',
    order_breakdown_title: 'ਸਪੱਸ਼ਟ ਕੀਮਤ ਅਤੇ ਲੌਜਿਸਟਿਕਸ ਵੇਰਵਾ',
    order_col_item: 'ਵੇਰਵਾ',
    order_col_rate: 'ਦਰ (₹/ਕਿਲੋ)',
    order_col_amount: 'ਕੁੱਲ ਰਕਮ (₹)',
    order_produce_farmer_subtotal: 'ਕਿਸਾਨ ਦੀ ਫ਼ਸਲ ਦਾ ਮੁੱਲ (ਸਿੱਧਾ ਭੁਗਤਾਨ)',
    order_produce_subtext: 'ਬਿਨਾਂ ਕਿਸੇ ਵਿਚੋਲੇ ਦੀ ਕਟੌਤੀ ਦੇ ਸਿੱਧਾ ਕਿਸਾਨਾਂ ਦੇ ਖਾਤੇ ਵਿੱਚ ਭੁਗਤਾਨ',
    order_logistics_fee: 'ਗ੍ਰੀਨ ਪੂਲਡ ਲੌਜਿਸਟਿਕਸ ਅਤੇ ਹੈਂਡਲਿੰਗ',
    order_logistics_subtext: 'ਖੇਤਾਂ ਤੋਂ ਹੱਬ ਤੱਕ ਸਾਂਝੀ ਨੇੜਲੀ ਗੱਡੀ ਦੀ ਢੋਆ-ਢੁਆਈ',
    order_platform_fee: 'ਪਲੇਟਫਾਰਮ ਸੇਵਾ ਫੀਸ (0.3%, ਵੱਧ ਤੋਂ ਵੱਧ ₹200)',
    order_total_landed_payable: 'ਕੁੱਲ ਦੇਣਯੋਗ ਲੈਂਡਡ ਰਕਮ',
    order_effective_landed_rate: 'ਅਸਲ ਲੈਂਡਡ ਕੀਮਤ',
    order_view_route_btn: 'ਸਾਂਝਾ ਪਿਕਅੱਪ ਰੂਟ ਵੇਖੋ',
    order_farmer_price_note: 'ਫ਼ਸਲ ਦੀ 100% ਰਕਮ ਬਿਨਾਂ ਕਿਸੇ ਵਿਚੋਲੇ ਦੀ ਕਟੌਤੀ ਦੇ ਸਿੱਧੇ ਕਿਸਾਨਾਂ ਨੂੰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।',
    order_platform_fee_badge: '0.3% ਪਲੇਟਫਾਰਮ ਫੀਸ (ਵੱਧ ਤੋਂ ਵੱਧ ₹200 ਸੀਮਤ ਲਾਗੂ)',
    order_cap_applied_badge: 'ਵੱਧ ਤੋਂ ਵੱਧ ₹200 ਸੀਮਾ ਲਾਗੂ',
    order_rate_applied_badge: '0.3% ਲਾਗੂ',

    log_page_tag: 'ਸਮਾਰਟ ਪੂਲਡ ਲੌਜਿਸਟਿਕਸ ਡਿਸਪੈਚ',
    log_page_title: 'ਹਰ ਗ੍ਰੀਨ ਰੂਟ ਨਾਲ ਵੱਧ ਡਿਲੀਵਰੀ ਕਰੋ।',
    log_page_desc:
      'ਨੇੜਲੇ ਖੇਤਾਂ ਤੋਂ ਉਪਜ ਨੂੰ ਆਪਣੇ-ਆਪ ਇਕ ਗੱਡੀ ਦੇ ਅਨੁਕੂਲ ਪਿਕਅੱਪ ਕ੍ਰਮ ਵਿੱਚ ਇਕੱਠਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
    log_optimize_btn: 'ਰੂਟ ਕ੍ਰਮ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਓ',
    log_telemetry_badge: 'ਇੰਟਰਐਕਟਿਵ ਰੂਟ ਟੈਲੀਮੈਟਰੀ',
    log_legend_stops: 'ਖੇਤ ਪਿਕਅੱਪ ਸਟਾਪ',
    log_legend_hub: 'ਖਰੀਦਦਾਰ ਡਿਲੀਵਰੀ ਹੱਬ',
    log_legend_route: 'ਸਭ ਤੋਂ ਨੇੜਲਾ ਸਾਂਝਾ ਰੂਟ',
    log_route_tag: 'ਸਾਂਝਾ ਰੂਟ #',
    log_route_delivering_to: 'ਡਿਲੀਵਰੀ ਟਿਕਾਣਾ',
    log_stops_header: 'ਸਟਾਪ ਕ੍ਰਮ',
    log_stop_pickup: 'ਪਿਕਅੱਪ',
    log_stop_delivery: 'ਅੰਤਿਮ ਡਿਲੀਵਰੀ',
    log_batch_unloading: 'ਇਕੱਠੇ ਮਾਲ ਦੀ ਉਤਰਾਈ',
    log_fact_distance: 'ਕੁੱਲ ਦੂਰੀ',
    log_fact_load: 'ਕੁੱਲ ਭਾਰ',
    log_fact_stops: 'ਕੁੱਲ ਸਟਾਪ',
    log_fact_time: 'ਅੰਦਾਜ਼ਨ ਸਮਾਂ',
    log_btn_pickup: 'ਪਿਕਅੱਪ ਰੂਟ ਸ਼ੁਰੂ ਕਰੋ',
    log_btn_transit: 'ਹੱਬ ਲਈ ਰਸਤੇ ਵਿੱਚ ਮਾਰਕ ਕਰੋ',
    log_btn_deliver: 'ਅੰਤਿਮ ਡਿਲੀਵਰੀ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
    log_status_delivered: 'ਰੂਟ ਮੁਕੰਮਲ ਅਤੇ ਫ਼ਸਲ ਸਫਲਤਾਪੂਰਵਕ ਡਿਲੀਵਰ ਹੋ ਗਈ',

    ana_page_tag: 'ਪਲੇਟਫਾਰਮ-ਵਿਆਪੀ ਟੈਲੀਮੈਟਰੀ ਵਿਸ਼ਲੇਸ਼ਣ',
    ana_page_title: 'ਕਿਸਾਨੀ ਪੁਲ, ਅੰਕੜਿਆਂ ਵਿੱਚ।',
    ana_page_desc:
      'ਸਪਲਾਈ ਦੀ ਮਜ਼ਬੂਤੀ, ਕਿਸਾਨਾਂ ਦੀ ਸਿੱਧੀ ਪਹੁੰਚ ਅਤੇ ਲੌਜਿਸਟਿਕਸ ਦੀ ਬੱਚਤ ਦਿਖਾਉਣ ਵਾਲੇ ਪਾਰਦਰਸ਼ੀ ਅੰਕੜੇ।',
    ana_kpi_farmers: 'ਜੁੜੇ ਹੋਏ ਕਿਸਾਨ',
    ana_kpi_farmers_sub: 'ਸਿੱਧੇ ਕਿਸਾਨ ਅਤੇ ਐੱਫ.ਪੀ.ਓ.',
    ana_kpi_buyers: 'ਰਜਿਸਟਰਡ ਖਰੀਦਦਾਰ',
    ana_kpi_buyers_sub: 'ਥੋਕ ਅਤੇ ਪ੍ਰਚੂਨ ਵਪਾਰੀ',
    ana_kpi_traded: 'ਵਿਕੀ ਹੋਈ ਕੁੱਲ ਫ਼ਸਲ',
    ana_kpi_traded_sub: '100% ਸਿੱਧੇ ਸੌਦੇ',
    ana_kpi_distance: 'ਔਸਤ ਡਿਲੀਵਰੀ ਦੂਰੀ',
    ana_kpi_distance_sub: 'ਸਥਾਨਕ ਸਪਲਾਈ ਦਾ ਘੇਰਾ',
    ana_chart_velocity_title: 'ਹਫ਼ਤਾਵਾਰ ਆਰਡਰ ਰਫ਼ਤਾਰ',
    ana_chart_velocity_tag: 'ਰੁਝਾਨ ਵਿਸ਼ਲੇਸ਼ਣ',
    ana_chart_demand_title: 'ਫ਼ਸਲ ਮੁਤਾਬਕ ਮੰਗ ਵੰਡ',
    ana_chart_demand_tag: 'ਇਤਿਹਾਸਕ ਮਾਤਰਾ',

    demo_eyebrow: '✦ ਲਾਈਵ ਹੈਕਾਥੌਨ ਡੈਮੋ',
    demo_title: 'ਮੰਗ ਦੇ ਸੰਕੇਤ ਤੋਂ ਲੈ ਕੇ ਡਿਲੀਵਰੀ ਤੱਕ।',
    demo_desc:
      'ਵੇਖੋ ਕਿਵੇਂ ਫ਼ਸਲਬ੍ਰਿਜ AI ਰੀਅਲ ਟਾਈਮ ਵਿੱਚ ਖੋਜ, ਬਹੁ-ਕਿਸਾਨ ਏਕੀਕਰਨ, ਗ੍ਰੀਨ ਲੌਜਿਸਟਿਕਸ ਅਤੇ ਭਵਿੱਖਬਾਣੀ ਨੂੰ ਜੋੜਦਾ ਹੈ।',
    demo_step1_title: 'ਖਰੀਦਦਾਰ ਨੇ ਮੰਗ ਦਰਜ ਕੀਤੀ',
    demo_step1_desc: 'ਚੰਡੀਗੜ੍ਹ ਦੇ ਥੋਕ ਵਪਾਰੀ ਨੇ 3,500 ਕਿਲੋ ਤਾਜ਼ੇ ਗ੍ਰੇਡ ਏ ਟਮਾਟਰਾਂ ਦਾ ਆਰਡਰ ਦਿੱਤਾ।',
    demo_step2_title: 'AI ਨੇ ਖੇਤਰੀ ਖੇਤਾਂ ਵਿੱਚ ਫ਼ਸਲ ਲੱਭੀ',
    demo_step2_desc: 'ਫ਼ਸਲਬ੍ਰਿਜ AI ਨੇ ਮੋਹਾਲੀ ਅਤੇ ਪਟਿਆਲਾ ਦੇ ਪ੍ਰਮਾਣਿਤ ਖੇਤਾਂ ਨੂੰ ਸਕੈਨ ਕੀਤਾ।',
    demo_step3_title: 'ਨੇੜਲੇ ਕਿਸਾਨਾਂ ਤੋਂ ਫ਼ਸਲ ਇਕੱਠੀ ਕੀਤੀ ਗਈ',
    demo_step3_desc: 'ਸਪਲਾਈ ਮਿਲਾਨ: ਹਰਪ੍ਰੀਤ (1,500 ਕਿਲੋ), ਗੁਰਪ੍ਰੀਤ (1,200 ਕਿਲੋ), ਰਵੀ (800 ਕਿਲੋ)।',
    demo_step4_title: 'ਸਾਂਝਾ ਪਿਕਅੱਪ ਰੂਟ ਤਿਆਰ ਹੋਇਆ',
    demo_step4_desc: '3 ਖੇਤ ਪਿਕਅੱਪ ਸਟਾਪਾਂ ਅਤੇ 1 ਡਿਲੀਵਰੀ ਹੱਬ ਨਾਲ ਰੂਟ ਬਣਿਆ।',
    demo_step5_title: 'ਸਭ ਤੋਂ ਛੋਟੇ ਰਸਤੇ ਦੀ ਤਰਤੀਬ ਲਗਾਈ ਗਈ',
    demo_step5_desc: 'ਖਾਲੀ ਗੱਡੀ ਘੁੰਮਣ ਤੋਂ ਰੋਕਣ ਲਈ ਨਕਸ਼ੇ ਮੁਤਾਬਕ ਸਟਾਪ ਤੈਅ ਕੀਤੇ ਗਏ।',
    demo_step6_title: 'ਫ਼ਸਲ ਇਕੱਠੀ ਕਰਕੇ ਰਸਤੇ ਵਿੱਚ ਭੇਜੀ ਗਈ',
    demo_step6_desc: 'ਤਾਜ਼ਗੀ ਵਾਹਨ ਵਿੱਚ ਇਕੱਠੀ ਕਰਦੇ ਸਮੇਂ ਗੁਣਵੱਤਾ ਦੀ ਜਾਂਚ ਕੀਤੀ ਗਈ।',
    demo_step7_title: 'ਚੰਡੀਗੜ੍ਹ ਹੱਬ ਤੇ ਆਖ਼ਰੀ ਡਿਲੀਵਰੀ ਦੀ ਪੁਸ਼ਟੀ',
    demo_step7_desc: 'ਆਰਡਰ ਡਿਲੀਵਰ ਹੋਇਆ; ਕਿਸਾਨਾਂ ਦੇ ਖਾਤਿਆਂ ਵਿੱਚ 0% ਕਟੌਤੀ ਨਾਲ ਭੁਗਤਾਨ ਹੋ ਗਿਆ।',
    demo_step8_title: 'ਫੀਡਬੈਕ ਚੱਕਰ: ਮੰਗ ਇਤਿਹਾਸ ਅੱਪਡੇਟ ਹੋਇਆ',
    demo_step8_desc: 'ਡਿਲੀਵਰ ਹੋਈ ਮਾਤਰਾ ਡਾਟਾਬੇਸ ਵਿੱਚ ਦਰਜ ਹੋਈ; AI ਮਾਡਲ ਨੇ ਨਵੀਂ ਸਿਖਲਾਈ ਲਈ।',
    demo_btn_init: 'ਲਾਈਵ ਡੈਮੋ ਸ਼ੁਰੂ ਕਰੋ',
    demo_btn_processing: 'ਕਾਰਵਾਈ ਜਾਰੀ ਹੈ…',
    demo_btn_next: 'ਅਗਲਾ ਕਦਮ ਜਾਰੀ ਰੱਖੋ',
    demo_completion_msg: 'ਫ਼ਸਲਬ੍ਰਿਜ AI ਚੱਕਰ ਮੁਕੰਮਲ — ਆਟੋਨੋਮਸ ਲੌਜਿਸਟਿਕਸ ਅਤੇ ਭਵਿੱਖਬਾਣੀ ਅੱਪਡੇਟ!',
    demo_btn_reset: 'ਡੈਮੋ ਦੁਬਾਰਾ ਚਲਾਓ',

    map_popup_lot: 'ਖੇਤ ਲਾਟ #',
    map_popup_hub: 'ਡਿਲੀਵਰੀ ਟਿਕਾਣਾ',
    map_popup_central_hub: 'ਕੇਂਦਰੀ ਪੂਰਤੀ ਹੱਬ',
    map_popup_qty: 'ਮਾਤਰਾ',
    map_popup_price: 'ਕੀਮਤ',
    map_popup_punjab: 'ਪੰਜਾਬ',

    landing_kicker: 'ਭਾਰਤ ਦਾ ਬੁੱਧੀਮਾਨ ਫਾਰਮ-ਟੂ-ਮਾਰਕੀਟ ਪੁਲ',
    landing_proof_direct: 'ਸਿੱਧੀ ਕਿਸਾਨ ਸਪਲਾਈ',
    landing_proof_markup: 'ਜ਼ੀਰੋ ਪਲੇਟਫਾਰਮ ਦਲਾਲੀ ਫੀਸ',
    landing_proof_route: 'ਲਾਈਵ ਰੂਟ ਦਿਖਾਈ ਦੇਣਾ',
    landing_net_live_match: 'ਲਾਈਵ ਮੈਚਿੰਗ',
    landing_net_signals: '12 ਸੰਕੇਤ ਇਕਸਾਰ',
    landing_net_supply: 'ਸਪਲਾਈ',
    landing_net_farms: '4 ਨੇੜਲੇ ਖੇਤ',
    landing_net_demand: 'ਮੰਗ',
    landing_net_buyers: '2 ਪ੍ਰਮਾਣਿਤ ਖਰੀਦਦਾਰ',
    landing_net_route: 'ਰੂਟ',
    landing_net_pooled: '86 ਕਿਲੋਮੀਟਰ ਸਾਂਝਾ ਰੂਟ',
    landing_signal_demand: 'ਮੰਗ +18.4%',
    landing_signal_fresh: 'ਤਾਜ਼ਗੀ ਸੁਰੱਖਿਅਤ',
    landing_status_dispatch: 'ਅਗਲੀ ਰਵਾਨਗੀ',
    landing_status_crop: 'ਟਮਾਟਰ · ਗ੍ਰੇਡ ਏ',
    landing_status_ready: '2,480 ਕਿਲੋ ਚੁੱਕਣ ਲਈ ਤਿਆਰ',
    landing_scroll_cue: 'ਫ਼ਸਲ ਦੀ ਯਾਤਰਾ ਵੇਖੋ',
    landing_story_kicker: 'ਇੱਕ ਫ਼ਸਲ। ਇੱਕ ਜੁੜੀ ਹੋਈ ਯਾਤਰਾ।',
    landing_story_title: 'ਖੇਤ ਤੋਂ ਖਰੀਦਦਾਰ ਤੱਕ ਚੰਗੀ ਫ਼ਸਲ ਦਾ ਮੁੱਲ ਕਦੇ ਨਹੀਂ ਘਟਣਾ ਚਾਹੀਦਾ।',
    landing_story_desc:
      'ਅੱਜ, ਖਿਲਰੀ ਹੋਈ ਮੰਗ ਅਤੇ ਅਲੱਗ-ਥਲੱਗ ਢੋਆ-ਢੁਆਈ ਚੰਗੀ ਫ਼ਸਲ ਨੂੰ ਨੁਕਸਾਨ ਵਿੱਚ ਬਦਲ ਦਿੰਦੀ ਹੈ। ਫ਼ਸਲਬ੍ਰਿਜ ਹਰ ਫੈਸਲੇ ਨੂੰ ਇੱਕ ਲਗਾਤਾਰ ਲੜੀ ਵਿੱਚ ਜੋੜਦਾ ਹੈ।',
    landing_step1_kicker: 'ਆਉਣ ਵਾਲੇ ਕੱਲ੍ਹ ਨੂੰ ਵੇਖੋ',
    landing_step1_title: 'ਮੰਗ ਇੱਕ ਸਪੱਸ਼ਟ ਸੰਕੇਤ ਬਣਦੀ ਹੈ, ਕੋਈ ਹੈਰਾਨੀ ਨਹੀਂ।',
    landing_step1_desc:
      'ਫ਼ਸਲਬ੍ਰਿਜ ਖਰੀਦ ਦੇ ਰੁਝਾਨਾਂ ਨੂੰ ਸਮਝ ਕੇ ਸਥਾਨਕ ਮੰਗ ਵਿੱਚ ਬਦਲਦਾ ਹੈ—ਫ਼ਸਲ ਦੇ ਖੇਤ ਵਿੱਚੋਂ ਨਿਕਲਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ।',
    landing_step1_label: 'ਅਗਲੇ ਹਫ਼ਤੇ ਟਮਾਟਰ ਦੀ ਮੰਗ',
    landing_step1_chart_title: '7-ਦਿਨਾ ਮੰਗ ਸੰਕੇਤ',
    landing_live_pill: 'ਲਾਈਵ',
    landing_step2_kicker: 'ਹਰ ਏਕੜ ਨੂੰ ਜੋੜੋ',
    landing_step2_title: 'ਛੋਟੀ ਵਾਢੀ ਮੰਡੀ-ਤਿਆਰ ਥੋਕ ਸਪਲਾਈ ਬਣ ਜਾਂਦੀ ਹੈ।',
    landing_step2_desc:
      'ਨੇੜਲੇ ਕਿਸਾਨਾਂ ਅਤੇ ਐੱਫ.ਪੀ.ਓਜ਼ ਨੂੰ ਫ਼ਸਲ, ਗ੍ਰੇਡ, ਸਮਾਂ ਅਤੇ ਸਥਾਨ ਮੁਤਾਬਕ ਜੋੜ ਕੇ ਇੱਕ ਭਰੋਸੇਯੋਗ ਲਾਟ ਬਣਾਈ ਜਾਂਦੀ ਹੈ।',
    landing_step2_label: 'ਇੱਕ ਖਰੀਦਦਾਰ ਆਰਡਰ ਵਿੱਚ ਪੂਲ ਕੀਤਾ ਗਿਆ',
    landing_step2_cluster_title: 'ਮਿਲਾਇਆ ਗਿਆ ਸਪਲਾਈ ਸਮੂਹ',
    landing_step3_kicker: 'ਇੱਕ ਬਣ ਕੇ ਅੱਗੇ ਵਧੋ',
    landing_step3_title: 'ਇੱਕ ਸਮਝਦਾਰ ਰੂਟ ਕਈ ਮਹਿੰਗੇ ਫੇਰਿਆਂ ਦੀ ਥਾਂ ਲੈਂਦਾ ਹੈ।',
    landing_step3_desc:
      'ਸਾਂਝੀ ਪਿਕਅੱਪ ਯੋਜਨਾ ਖਾਲੀ ਕਿਲੋਮੀਟਰ ਘਟਾਉਂਦੀ ਹੈ, ਤਾਜ਼ਗੀ ਬਚਾਉਂਦੀ ਹੈ ਅਤੇ ਸਭ ਨੂੰ ਸਾਂਝਾ ਲਾਈਵ ਨਕਸ਼ਾ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।',
    landing_step3_label: 'ਅੰਦਾਜ਼ਨ ਢੋਆ-ਢੁਆਈ ਬੱਚਤ',
    landing_step3_route_title: 'ਅਨੁਕੂਲ ਪਿਕਅੱਪ ਰੂਟ',
    landing_impact_kicker: 'ਇਹ ਪੁਲ ਹਰ ਕਦਮ ਤੇ ਮੁੱਲ ਪੈਦਾ ਕਰਦਾ ਹੈ',
    landing_impact_title: 'ਵਧੀਆ ਮੁਨਾਫ਼ਾ। ਤਾਜ਼ਾ ਭੋਜਨ। ਘੱਟ ਵਿਅਰਥ ਕਿਲੋਮੀਟਰ।',
    landing_impact_desc:
      'ਇੱਕ ਜੁੜੀ ਹੋਈ ਪ੍ਰਣਾਲੀ ਹਰ ਕਿਸਾਨ ਅਤੇ ਵਪਾਰੀ ਨੂੰ ਬਿਜਾਈ ਤੋਂ ਲੈ ਕੇ ਆਖ਼ਰੀ ਡਿਲੀਵਰੀ ਤੱਕ ਭਰੋਸਾ ਦਿੰਦੀ ਹੈ।',
    landing_stat_acc: 'ਭਵਿੱਖਬਾਣੀ ਸ਼ੁੱਧਤਾ',
    landing_stat_transit: 'ਘੱਟ ਢੋਆ-ਢੁਆਈ ਖ਼ਰਚਾ',
    landing_stat_miles: 'ਘੱਟ ਭੋਜਨ ਮੀਲ',
    landing_stat_markup_label: 'ਪਲੇਟਫਾਰਮ ਦਲਾਲੀ ਫੀਸ',
    landing_aud_farmers: 'ਕਿਸਾਨ',
    landing_aud_farmers_sub: 'ਅਸਲ ਮੰਗ ਨਾਲ ਯੋਜਨਾ ਬਣਾਉਂਦੇ ਹਨ',
    landing_aud_buyers: 'ਖਰੀਦਦਾਰ',
    landing_aud_buyers_sub: 'ਪੂਰੇ ਵਿਸ਼ਵਾਸ ਨਾਲ ਖਰੀਦਦੇ ਹਨ',
    landing_aud_trucks: 'ਟਰਾਂਸਪੋਰਟਰ',
    landing_aud_trucks_sub: 'ਭਰੀਆਂ ਗੱਡੀਆਂ ਚਲਾਉਂਦੇ ਹਨ',
    landing_cta_kicker: 'ਤੁਹਾਡੀ ਅਗਲੀ ਫ਼ਸਲ ਹੋਰ ਸਮਝਦਾਰੀ ਨਾਲ ਵਿਕ ਸਕਦੀ ਹੈ',
    landing_cta_title: 'ਕੀ ਤੁਸੀਂ ਪੁਲ ਪਾਰ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?',
    landing_cta_sub:
      'ਲਾਈਵ ਫ਼ਸਲਬ੍ਰਿਜ ਨੈੱਟਵਰਕ ਵਿੱਚ ਦਾਖਲ ਹੋਵੋ ਅਤੇ ਸਪਲਾਈ, ਮੰਗ ਅਤੇ ਡਿਲੀਵਰੀ ਦਾ ਮੇਲ ਵੇਖੋ।',
    landing_cta_demo_btn: 'ਲਾਈਵ ਡੈਮੋ ਚਲਾਓ',
    landing_cta_farmer_btn: 'ਕਿਸਾਨ ਹੱਬ ਖੋਲ੍ਹੋ',

    dash_loading_telemetry: 'ਅਸਲ ਖੇਤਰੀ ਟੈਲੀਮੈਟਰੀ ਲੋਡ ਹੋ ਰਹੀ ਹੈ…',
    dash_no_fields: 'ਇਸ ਲਈ ਕੋਈ ਕਿਰਿਆਸ਼ੀਲ ਖੇਤ ਨਹੀਂ ਮਿਲਿਆ:',
    dash_next_week: 'ਅਗਲਾ ਹਫ਼ਤਾ (AI)',
    dash_chart_demand: 'ਮੰਗ',

    log_empty_title: 'ਕੋਈ ਕਿਰਿਆਸ਼ੀਲ ਲੌਜਿਸਟਿਕਸ ਰੂਟ ਨਹੀਂ',
    log_empty_desc:
      'ਮੰਡੀ ਤੋਂ ਕੋਈ ਆਰਡਰ ਦਿਓ ਜਾਂ ਸਾਂਝਾ ਰੂਟ ਬਣਾਉਣ ਲਈ ਲਾਈਵ ਡੈਮੋ ਚਲਾਓ।',
    log_empty_cta: 'ਮੰਡੀ ਵੇਖੋ',
    log_updating: 'ਸਥਿਤੀ ਅੱਪਡੇਟ ਹੋ ਰਹੀ ਹੈ…',
    log_batch_title: 'ਥੋਕ ਬੈਚ',

    ana_chart_orders: 'ਆਰਡਰ',
    ana_chart_demand: 'ਮੰਗ',
  },
};
