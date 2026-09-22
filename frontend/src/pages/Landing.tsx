import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  Leaf,
  MapPin,
  PackageCheck,
  Route,
  ShoppingBasket,
  Sparkles,
  Sprout,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Landing: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const journeySteps = [
    {
      number: '01',
      kicker: t('landing_step1_kicker'),
      title: t('landing_step1_title'),
      description: t('landing_step1_desc'),
      icon: BarChart3,
      metric: '+18.4%',
      metricLabel: t('landing_step1_label'),
      chartTitle: t('landing_step1_chart_title'),
      bars: [42, 55, 50, 66, 61, 78, 91],
    },
    {
      number: '02',
      kicker: t('landing_step2_kicker'),
      title: t('landing_step2_title'),
      description: t('landing_step2_desc'),
      icon: Users,
      metric: `4 ${t('landing_aud_farmers').toLowerCase()}`,
      metricLabel: t('landing_step2_label'),
      clusterTitle: t('landing_step2_cluster_title'),
      farms: ['FB', 'KL', 'AS', 'RM'],
    },
    {
      number: '03',
      kicker: t('landing_step3_kicker'),
      title: t('landing_step3_title'),
      description: t('landing_step3_desc'),
      icon: Route,
      metric: '32%',
      metricLabel: t('landing_step3_label'),
      routeTitle: t('landing_step3_route_title'),
      routeStops: ['Ludhiana', 'Khanna', 'Mandi Gobindgarh', 'Delhi NCR'],
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleHeroPointer = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    heroRef.current?.style.setProperty('--pointer-x', x.toFixed(3));
    heroRef.current?.style.setProperty('--pointer-y', y.toFixed(3));
  };

  return (
    <div className="landing-page">
      <section
        ref={heroRef}
        className="story-hero"
        onPointerMove={handleHeroPointer}
        onPointerLeave={() => {
          heroRef.current?.style.setProperty('--pointer-x', '0');
          heroRef.current?.style.setProperty('--pointer-y', '0');
        }}
      >
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="story-hero-inner">
          <div className="story-hero-copy">
            <div className="hero-kicker hero-enter hero-enter-one">
              <span className="kicker-pulse" />
              {t('landing_kicker')}
            </div>

            <h1 className="story-hero-title hero-enter hero-enter-two">
              {t('landing_title_1')} <span>{t('landing_title_2')}</span>
            </h1>

            <p className="story-hero-description hero-enter hero-enter-three">
              {t('landing_desc')}
            </p>

            <div className="story-hero-actions hero-enter hero-enter-four">
              <Link className="landing-primary-btn" to="/marketplace">
                {t('landing_cta_marketplace')}
                <ArrowRight size={18} />
              </Link>
              <Link className="landing-ghost-btn" to="/demo">
                <Sparkles size={17} />
                {t('landing_cta_demo')}
              </Link>
            </div>

            <div className="hero-proof hero-enter hero-enter-five">
              <span><Check size={14} /> {t('landing_proof_direct')}</span>
              <span><Check size={14} /> {t('landing_proof_markup')}</span>
              <span><Check size={14} /> {t('landing_proof_route')}</span>
            </div>
          </div>

          <div className="network-stage hero-enter hero-enter-visual" aria-label="FasalBridge live supply network illustration">
            <div className="network-glow" aria-hidden="true" />
            <div className="network-ring network-ring-outer" aria-hidden="true" />
            <div className="network-ring network-ring-inner" aria-hidden="true" />

            <div className="network-core">
              <div className="network-core-icon"><BrainCircuit size={31} /></div>
              <small>FASALBRIDGE AI</small>
              <strong>{t('landing_net_live_match')}</strong>
              <span><i /> {t('landing_net_signals')}</span>
            </div>

            <div className="network-node node-farmer">
              <span className="node-icon"><Sprout size={18} /></span>
              <div><small>{t('landing_net_supply')}</small><strong>{t('landing_net_farms')}</strong></div>
            </div>
            <div className="network-node node-buyer">
              <span className="node-icon"><ShoppingBasket size={18} /></span>
              <div><small>{t('landing_net_demand')}</small><strong>{t('landing_net_buyers')}</strong></div>
            </div>
            <div className="network-node node-route">
              <span className="node-icon"><Truck size={18} /></span>
              <div><small>{t('landing_net_route')}</small><strong>{t('landing_net_pooled')}</strong></div>
            </div>

            <div className="floating-signal signal-one">
              <TrendingUp size={14} /> {t('landing_signal_demand')}
            </div>
            <div className="floating-signal signal-two">
              <Leaf size={14} /> {t('landing_signal_fresh')}
            </div>

            <div className="network-status-card">
              <div>
                <span className="status-dot" />
                {t('landing_status_dispatch')}
              </div>
              <strong>{t('landing_status_crop')}</strong>
              <span>{t('landing_status_ready')}</span>
              <div className="status-progress"><i /></div>
            </div>
          </div>
        </div>

        <a className="hero-scroll-cue" href="#journey" aria-label="Scroll to see how FasalBridge works">
          <span>{t('landing_scroll_cue')}</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section className="story-intro" id="journey">
        <div className="landing-shell story-intro-grid">
          <div data-reveal>
            <span className="section-kicker">{t('landing_story_kicker')}</span>
            <h2>{t('landing_story_title')}</h2>
          </div>
          <p data-reveal>
            {t('landing_story_desc')}
          </p>
        </div>
      </section>

      <section className="journey-section" aria-label="How FasalBridge works">
        <div className="journey-line" aria-hidden="true"><span /></div>
        <div className="landing-shell">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className={`journey-step journey-step-${index + 1}`} key={step.number} data-reveal>
                <div className="journey-copy">
                  <span className="journey-number">{step.number}</span>
                  <div className="journey-icon"><Icon size={21} /></div>
                  <span className="journey-kicker">{step.kicker}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                <div className="journey-visual">
                  {step.bars && (
                    <div className="signal-chart-card">
                      <div className="visual-card-head">
                        <span>{step.chartTitle}</span>
                        <span className="live-pill"><i /> {t('landing_live_pill')}</span>
                      </div>
                      <div className="mini-chart" aria-hidden="true">
                        {step.bars.map((height, barIndex) => (
                          <i key={barIndex} style={{ height: `${height}%`, animationDelay: `${barIndex * 90}ms` }} />
                        ))}
                      </div>
                      <div className="visual-metric"><strong>{step.metric}</strong><span>{step.metricLabel}</span></div>
                    </div>
                  )}

                  {step.farms && (
                    <div className="pool-card">
                      <div className="visual-card-head"><span>{step.clusterTitle}</span><MapPin size={16} /></div>
                      <div className="farm-cluster" aria-hidden="true">
                        {step.farms.map((farm, farmIndex) => <i key={farm} style={{ '--farm-index': farmIndex } as React.CSSProperties}>{farm}</i>)}
                        <span><BrainCircuit size={23} /></span>
                      </div>
                      <div className="visual-metric"><strong>{step.metric}</strong><span>{step.metricLabel}</span></div>
                    </div>
                  )}

                  {step.routeStops && (
                    <div className="route-card">
                      <div className="visual-card-head"><span>{step.routeTitle}</span><Route size={16} /></div>
                      <div className="route-list">
                        {step.routeStops.map((stop, stopIndex) => (
                          <div key={stop} className={stopIndex === step.routeStops!.length - 1 ? 'route-destination' : ''}>
                            <i>{stopIndex === step.routeStops!.length - 1 ? <PackageCheck size={14} /> : stopIndex + 1}</i>
                            <span>{stop}</span>
                            {stopIndex < step.routeStops!.length - 1 && <em />}
                          </div>
                        ))}
                      </div>
                      <div className="visual-metric"><strong>{step.metric}</strong><span>{step.metricLabel}</span></div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-glow" aria-hidden="true" />
        <div className="landing-shell">
          <div className="impact-heading" data-reveal>
            <span className="section-kicker light">{t('landing_impact_kicker')}</span>
            <h2>{t('landing_impact_title')}</h2>
            <p>{t('landing_impact_desc')}</p>
          </div>

          <div className="impact-grid" data-reveal>
            <div className="impact-stat"><strong>94<span>%</span></strong><p>{t('landing_stat_acc')}</p></div>
            <div className="impact-stat"><strong>32<span>%</span></strong><p>{t('landing_stat_transit')}</p></div>
            <div className="impact-stat"><strong>35<span>%</span></strong><p>{t('landing_stat_miles')}</p></div>
            <div className="impact-stat"><strong>0<span>%</span></strong><p>{t('landing_stat_markup_label')}</p></div>
          </div>

          <div className="impact-audiences" data-reveal>
            <div><Sprout size={20} /><span><strong>{t('landing_aud_farmers')}</strong> {t('landing_aud_farmers_sub')}</span></div>
            <div><ShoppingBasket size={20} /><span><strong>{t('landing_aud_buyers')}</strong> {t('landing_aud_buyers_sub')}</span></div>
            <div><Truck size={20} /><span><strong>{t('landing_aud_trucks')}</strong> {t('landing_aud_trucks_sub')}</span></div>
          </div>
        </div>
      </section>

      <section className="landing-cta-section">
        <div className="landing-cta-card" data-reveal>
          <div className="cta-leaf cta-leaf-one" aria-hidden="true"><Leaf size={120} /></div>
          <div className="cta-leaf cta-leaf-two" aria-hidden="true"><Leaf size={90} /></div>
          <span className="section-kicker">{t('landing_cta_kicker')}</span>
          <h2>{t('landing_cta_title')}</h2>
          <p>{t('landing_cta_sub')}</p>
          <div className="landing-cta-actions">
            <Link className="landing-primary-btn" to="/demo">{t('landing_cta_demo_btn')} <Zap size={18} /></Link>
            <Link className="landing-text-link" to="/farmer">{t('landing_cta_farmer_btn')} <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
