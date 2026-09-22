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

const journeySteps = [
  {
    number: '01',
    kicker: 'See what is coming',
    title: 'Demand becomes a signal, not a surprise.',
    description:
      'FasalBridge reads buying patterns and turns them into clear, local crop demand—before the harvest leaves the field.',
    icon: BarChart3,
    metric: '+18.4%',
    metricLabel: 'tomato demand next week',
    bars: [42, 55, 50, 66, 61, 78, 91],
  },
  {
    number: '02',
    kicker: 'Connect every acre',
    title: 'Small harvests become market-ready supply.',
    description:
      'Nearby farmers and FPOs are matched by crop, grade, timing, and location—building one reliable lot for the right buyer.',
    icon: Users,
    metric: '4 farms',
    metricLabel: 'pooled into one buyer order',
    farms: ['FB', 'KL', 'AS', 'RM'],
  },
  {
    number: '03',
    kicker: 'Move as one',
    title: 'One smart route replaces many costly trips.',
    description:
      'A pooled pickup plan reduces empty kilometres, protects freshness, and gives every participant a shared live view.',
    icon: Route,
    metric: '32% less',
    metricLabel: 'estimated transport cost',
    routeStops: ['Ludhiana', 'Khanna', 'Mandi Gobindgarh', 'Delhi NCR'],
  },
];

export const Landing: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

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
              India’s intelligent farm-to-market bridge
            </div>

            <h1 className="story-hero-title hero-enter hero-enter-two">
              From scattered harvests to <span>one intelligent supply chain.</span>
            </h1>

            <p className="story-hero-description hero-enter hero-enter-three">
              Predict local demand, unite nearby farms, and deliver directly to serious buyers—while produce is still at its freshest.
            </p>

            <div className="story-hero-actions hero-enter hero-enter-four">
              <Link className="landing-primary-btn" to="/marketplace">
                Explore live marketplace
                <ArrowRight size={18} />
              </Link>
              <Link className="landing-ghost-btn" to="/demo">
                <Sparkles size={17} />
                Watch the system work
              </Link>
            </div>

            <div className="hero-proof hero-enter hero-enter-five">
              <span><Check size={14} /> Direct farmer supply</span>
              <span><Check size={14} /> Zero platform markup</span>
              <span><Check size={14} /> Live route visibility</span>
            </div>
          </div>

          <div className="network-stage hero-enter hero-enter-visual" aria-label="FasalBridge live supply network illustration">
            <div className="network-glow" aria-hidden="true" />
            <div className="network-ring network-ring-outer" aria-hidden="true" />
            <div className="network-ring network-ring-inner" aria-hidden="true" />

            <div className="network-core">
              <div className="network-core-icon"><BrainCircuit size={31} /></div>
              <small>FASALBRIDGE AI</small>
              <strong>Live match</strong>
              <span><i /> 12 signals aligned</span>
            </div>

            <div className="network-node node-farmer">
              <span className="node-icon"><Sprout size={18} /></span>
              <div><small>SUPPLY</small><strong>4 nearby farms</strong></div>
            </div>
            <div className="network-node node-buyer">
              <span className="node-icon"><ShoppingBasket size={18} /></span>
              <div><small>DEMAND</small><strong>2 verified buyers</strong></div>
            </div>
            <div className="network-node node-route">
              <span className="node-icon"><Truck size={18} /></span>
              <div><small>ROUTE</small><strong>86 km pooled</strong></div>
            </div>

            <div className="floating-signal signal-one">
              <TrendingUp size={14} /> Demand +18.4%
            </div>
            <div className="floating-signal signal-two">
              <Leaf size={14} /> Freshness protected
            </div>

            <div className="network-status-card">
              <div>
                <span className="status-dot" />
                Next dispatch
              </div>
              <strong>Tomatoes · Grade A</strong>
              <span>2,480 kg ready for pickup</span>
              <div className="status-progress"><i /></div>
            </div>
          </div>
        </div>

        <a className="hero-scroll-cue" href="#journey" aria-label="Scroll to see how FasalBridge works">
          <span>Follow the harvest</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section className="story-intro" id="journey">
        <div className="landing-shell story-intro-grid">
          <div data-reveal>
            <span className="section-kicker">ONE HARVEST. ONE CONNECTED JOURNEY.</span>
            <h2>Good produce should never lose value between the field and the buyer.</h2>
          </div>
          <p data-reveal>
            Today, fragmented demand, small lots, and disconnected transport turn good harvests into waste. FasalBridge connects every decision in one continuous flow.
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
                        <span>7-day demand signal</span>
                        <span className="live-pill"><i /> LIVE</span>
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
                      <div className="visual-card-head"><span>Matched supply cluster</span><MapPin size={16} /></div>
                      <div className="farm-cluster" aria-hidden="true">
                        {step.farms.map((farm, farmIndex) => <i key={farm} style={{ '--farm-index': farmIndex } as React.CSSProperties}>{farm}</i>)}
                        <span><BrainCircuit size={23} /></span>
                      </div>
                      <div className="visual-metric"><strong>{step.metric}</strong><span>{step.metricLabel}</span></div>
                    </div>
                  )}

                  {step.routeStops && (
                    <div className="route-card">
                      <div className="visual-card-head"><span>Optimized pickup route</span><Route size={16} /></div>
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
            <span className="section-kicker light">THE BRIDGE CREATES VALUE AT EVERY STEP</span>
            <h2>Better margins. Fresher food. Fewer wasted miles.</h2>
            <p>One connected system gives every participant more confidence—from planting decisions to final delivery.</p>
          </div>

          <div className="impact-grid" data-reveal>
            <div className="impact-stat"><strong>94<span>%</span></strong><p>forecast accuracy</p></div>
            <div className="impact-stat"><strong>32<span>%</span></strong><p>lower transit cost</p></div>
            <div className="impact-stat"><strong>35<span>%</span></strong><p>fewer food miles</p></div>
            <div className="impact-stat"><strong>0<span>%</span></strong><p>platform markup</p></div>
          </div>

          <div className="impact-audiences" data-reveal>
            <div><Sprout size={20} /><span><strong>Farmers</strong> plan with real demand</span></div>
            <div><ShoppingBasket size={20} /><span><strong>Buyers</strong> source with confidence</span></div>
            <div><Truck size={20} /><span><strong>Transporters</strong> move fuller loads</span></div>
          </div>
        </div>
      </section>

      <section className="landing-cta-section">
        <div className="landing-cta-card" data-reveal>
          <div className="cta-leaf cta-leaf-one" aria-hidden="true"><Leaf size={120} /></div>
          <div className="cta-leaf cta-leaf-two" aria-hidden="true"><Leaf size={90} /></div>
          <span className="section-kicker">YOUR NEXT HARVEST CAN MOVE SMARTER</span>
          <h2>Ready to cross the bridge?</h2>
          <p>Step into the live FasalBridge network and see supply, demand, and delivery come together.</p>
          <div className="landing-cta-actions">
            <Link className="landing-primary-btn" to="/demo">Run the live demo <Zap size={18} /></Link>
            <Link className="landing-text-link" to="/farmer">Open Farmer Hub <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
