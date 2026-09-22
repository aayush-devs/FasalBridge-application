export type Language = 'en' | 'hi' | 'pa';

export interface Translations {
  // Navigation
  nav_marketplace: string;
  nav_farmer_hub: string;
  nav_logistics: string;
  nav_analytics: string;
  nav_demo: string;

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

  // Order Result Breakdown
  order_result_badge: string;
  order_result_code: string;
  order_farmers_pooled: string;
  order_breakdown_title: string;
  order_col_item: string;
  order_col_rate: string;
  order_col_amount: string;
  order_produce_farmer_subtotal: string;
  order_logistics_fee: string;
  order_platform_fee: string;
  order_platform_fee_capped: string;
  order_total_landed_payable: string;
  order_effective_landed_rate: string;
  order_view_route_btn: string;
  order_farmer_price_note: string;
  order_platform_fee_badge: string;

  // Common Crops
  crop_tomato: string;
  crop_onion: string;
  crop_potato: string;
  crop_wheat: string;
  crop_rice: string;

  // Common Locations
  loc_mohali: string;
  loc_chandigarh: string;
  loc_patiala: string;
  loc_ludhiana: string;
  loc_delhi: string;

  // General & Field Cards
  available_supply: string;
  harvest_date: string;
  locate_btn: string;
  focused_btn: string;
  verified_farm: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    nav_marketplace: 'Marketplace',
    nav_farmer_hub: 'Farmer Hub & Map',
    nav_logistics: 'Smart Logistics',
    nav_analytics: 'Analytics',
    nav_demo: 'Run Live Demo',

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
    order_logistics_fee: 'Green Pooled Logistics & Handling',
    order_platform_fee: 'Platform Service Fee (0.3%, max ₹200)',
    order_platform_fee_capped: 'Platform Fee (0.3% capped at ₹200)',
    order_total_landed_payable: 'Total Landed Order Amount',
    order_effective_landed_rate: 'Effective Landed Price',
    order_view_route_btn: 'View Pooled Pickup Route',
    order_farmer_price_note: '100% of produce amount is disbursed directly to farmers without broker cuts.',
    order_platform_fee_badge: '0.3% Platform fee capped at max ₹200 applied',

    crop_tomato: 'Tomato',
    crop_onion: 'Onion',
    crop_potato: 'Potato',
    crop_wheat: 'Wheat',
    crop_rice: 'Rice',

    loc_mohali: 'Mohali',
    loc_chandigarh: 'Chandigarh',
    loc_patiala: 'Patiala',
    loc_ludhiana: 'Ludhiana',
    loc_delhi: 'Delhi',

    available_supply: 'Available Supply',
    harvest_date: 'Harvest Date',
    locate_btn: 'Locate',
    focused_btn: 'Focused on Map',
    verified_farm: 'Verified Farm',
  },

  hi: {
    nav_marketplace: 'मंडी (बाज़ार)',
    nav_farmer_hub: 'किसान हब व नक्शा',
    nav_logistics: 'स्मार्ट लॉजिस्टिक्स',
    nav_analytics: 'एनालिटिक्स',
    nav_demo: 'लाइव डेमो चलाएं',

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
    order_logistics_fee: 'ग्रीन पूल्ड लॉजिस्टिक्स व हैंडलिंग',
    order_platform_fee: 'प्लेटफॉर्म सेवा शुल्क (0.3%, अधिकतम ₹200)',
    order_platform_fee_capped: 'प्लेटफॉर्म शुल्क (0.3% कैप्ड ₹200)',
    order_total_landed_payable: 'कुल देय लैंडेड राशि',
    order_effective_landed_rate: 'प्रभावी लैंडेड मूल्य',
    order_view_route_btn: 'पूल्ड पिकअप रूट देखें',
    order_farmer_price_note: 'फसल की 100% राशि बिना किसी दलाल कटौती के सीधे किसानों को दी जाती है।',
    order_platform_fee_badge: '0.3% प्लेटफॉर्म शुल्क (अधिकतम ₹200 लागू)',

    crop_tomato: 'टमाटर',
    crop_onion: 'प्याज़',
    crop_potato: 'आलू',
    crop_wheat: 'गेहूं',
    crop_rice: 'चावल',

    loc_mohali: 'मोहाली',
    loc_chandigarh: 'चंडीगढ़',
    loc_patiala: 'पटियाला',
    loc_ludhiana: 'लुधियाना',
    loc_delhi: 'दिल्ली',

    available_supply: 'उपलब्ध आपूर्ति',
    harvest_date: 'कटाई तिथि',
    locate_btn: 'नक्शे पर खोजें',
    focused_btn: 'नक्शे पर केंद्रित',
    verified_farm: 'सत्यापित खेत',
  },

  pa: {
    nav_marketplace: 'ਮੰਡੀ (ਬਾਜ਼ਾਰ)',
    nav_farmer_hub: 'ਕਿਸਾਨ ਹੱਬ ਅਤੇ ਨਕਸ਼ਾ',
    nav_logistics: 'ਸਮਾਰਟ ਲੌਜਿਸਟਿਕਸ',
    nav_analytics: 'ਵਿਸ਼ਲੇਸ਼ਣ',
    nav_demo: 'ਲਾਈਵ ਡੈਮੋ ਚਲਾਓ',

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
    order_logistics_fee: 'ਗ੍ਰੀਨ ਪੂਲਡ ਲੌਜਿਸਟਿਕਸ ਅਤੇ ਹੈਂਡਲਿੰਗ',
    order_platform_fee: 'ਪਲੇਟਫਾਰਮ ਸੇਵਾ ਫੀਸ (0.3%, ਵੱਧ ਤੋਂ ਵੱਧ ₹200)',
    order_platform_fee_capped: 'ਪਲੇਟਫਾਰਮ ਫੀਸ (0.3% ਕੈਪਡ ₹200)',
    order_total_landed_payable: 'ਕੁੱਲ ਦੇਣਯੋਗ ਲੈਂਡਡ ਰਕਮ',
    order_effective_landed_rate: 'ਅਸਲ ਲੈਂਡਡ ਕੀਮਤ',
    order_view_route_btn: 'ਸਾਂਝਾ ਪਿਕਅੱਪ ਰੂਟ ਵੇਖੋ',
    order_farmer_price_note: 'ਫ਼ਸਲ ਦੀ 100% ਰਕਮ ਬਿਨਾਂ ਕਿਸੇ ਵਿਚੋਲੇ ਦੀ ਕਟੌਤੀ ਦੇ ਸਿੱਧੇ ਕਿਸਾਨਾਂ ਨੂੰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।',
    order_platform_fee_badge: '0.3% ਪਲੇਟਫਾਰਮ ਫੀਸ (ਵੱਧ ਤੋਂ ਵੱਧ ₹200 ਸੀਮਤ ਲਾਗੂ)',

    crop_tomato: 'ਟਮਾਟਰ',
    crop_onion: 'ਪਿਆਜ਼',
    crop_potato: 'ਆਲੂ',
    crop_wheat: 'ਕਣਕ',
    crop_rice: 'ਚੌਲ',

    loc_mohali: 'ਮੋਹਾਲੀ',
    loc_chandigarh: 'ਚੰਡੀਗੜ੍ਹ',
    loc_patiala: 'ਪਟਿਆਲਾ',
    loc_ludhiana: 'ਲੁਧਿਆਣਾ',
    loc_delhi: 'ਦਿੱਲੀ',

    available_supply: 'ਉਪਲਬਧ ਸਪਲਾਈ',
    harvest_date: 'ਵਾਢੀ ਦੀ ਮਿਤੀ',
    locate_btn: 'ਨਕਸ਼ੇ ਤੇ ਲੱਭੋ',
    focused_btn: 'ਨਕਸ਼ੇ ਤੇ ਕੇਂਦਰਿਤ',
    verified_farm: 'ਪ੍ਰਮਾਣਿਤ ਖੇਤ',
  },
};
