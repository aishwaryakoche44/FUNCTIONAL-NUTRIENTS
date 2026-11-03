import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, Leaf, FlaskConical, Sprout, Microscope, Beaker, CheckCircle2, Mail, ChevronDown } from 'lucide-react';

const featured = [
  { n:'01', type:'FUNCTIONAL PROTEIN', name:'Omega Protein Complex', code:'OPC', desc:'A synergistic combination of omega-3 and protein, formulated for functional nutrition.', tint:'sage', image:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=85', imageAlt:'Salmon and greens representing omega-rich nutrition' },
  { n:'02', type:'FUNCTIONAL FIBER', name:'Myrobalan Prebiotic Fiber', code:'MPF', desc:'A plant-sourced prebiotic fiber formulated to support gut health and the gut microbiome.', tint:'lilac', image:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85', imageAlt:'Whole-grain bread representing plant-based fiber' },
  { n:'03', type:'FUNCTIONAL SWEETENER', name:'Monk Fruit Allulose Complex', code:'Formcal Zero MA', desc:'A sugar replacement concept for food and beverage applications, with a 1:1 equivalent dosage.', tint:'peach', image:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85', imageAlt:'Fresh fruit and vegetables representing naturally sweetened foods' }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({name:'', company:'', email:'', interest:'', message:''});
  const [notice, setNotice] = useState(false);
  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(false), 4500);
    return () => window.clearTimeout(timeout);
  }, [notice]);
  const nav = [['Our approach','#approach'],['Ingredients','#ingredients'],['What we do','#solutions'],['Contact','#contact']];
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => {
    e.preventDefault();
    const subject = encodeURIComponent('Website enquiry — Functional Nutrients');
    const body = encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nInterested in: ${form.interest}\nMessage: ${form.message}`);
    setNotice(true);
    setForm({name:'', company:'', email:'', interest:'', message:''});
    window.setTimeout(() => {
      window.location.href = `mailto:functionalnutrients@gmail.com?subject=${subject}&body=${body}`;
    }, 350);
  };

  return <div className="page">
    <div className="announcement"><span>FUNCTIONAL NUTRIENTS</span><span>SCIENCE-LED. NATURE-INSPIRED. <i>✳</i></span></div>
    <header className="header">
      <a href="#home" className="logo"><img src="/assets/functional-nutrients-logo.png" alt="Functional Nutrients"/></a>
      <nav className={menuOpen?'nav nav-open':'nav'}>{nav.map(([label,href])=><a href={href} key={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}<a className="nav-button" href="#contact" onClick={()=>setMenuOpen(false)}>Start a conversation <ArrowUpRight size={15}/></a></nav>
      <button className="menu-button" aria-label="Toggle menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> WE ARE A NUTRIENT TECHNOLOGY COMPANY</div>
          <h1>Functional<br/><em>by nature.</em><br/>Thoughtful by design.</h1>
          <p className="hero-description">We formulate functional nutrients for functional food, functional beverages and nutraceuticals — turning farm-sourced raw materials into purposeful nutritional solutions.</p>
          <div className="hero-actions"><a className="primary-button" href="#approach">Discover our approach <ArrowUpRight size={17}/></a><a className="quiet-link" href="#ingredients">Explore ingredients <ArrowRight size={16}/></a></div>
          <div className="hero-footnote"><span className="round-icon"><Sprout size={17}/></span><span>Rooted in raw materials. Guided by formulation science.</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-frame"><img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1500&q=90" alt="Fresh green botanical ingredients and leaves"/></div>
          <div className="visual-orbit orbit-a"></div><div className="visual-orbit orbit-b"></div>
          <div className="seal"><span>FN</span><small>FORMULATED<br/>WITH PURPOSE</small></div>
          <div className="visual-index"><span>01 — 04</span><span>FUNCTIONAL NUTRIENTS</span></div>
        </div>
        <div className="hero-bottom"><span>FORMULATION</span><b></b><span>SCIENCE</span><b></b><span>APPLICATION</span><a href="#approach">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <div className="marquee"><div>FUNCTIONAL FOOD <i>✳</i> FUNCTIONAL BEVERAGES <i>✳</i> NUTRACEUTICALS <i>✳</i> FUNCTIONAL FOOD <i>✳</i> FUNCTIONAL BEVERAGES <i>✳</i> NUTRACEUTICALS <i>✳</i></div></div>

      <section id="approach" className="approach section">
        <div className="section-label"><span>01 / OUR APPROACH</span><span>WHAT WE BELIEVE IN</span></div>
        <div className="approach-grid">
          <h2>Better ingredients<br/>begin with <em>better thinking.</em></h2>
          <div className="approach-copy"><p className="intro">We bring raw materials, formulation expertise and product thinking together to help brands build purposeful nutrition.</p><p>Using advanced formulation technologies, we convert farm-sourced raw materials into functional nutrients. Our ecosystem connects formulation scientists, food technologists and contract manufacturers to support product development and commercialization.</p><a href="#solutions" className="under-link">See how we work <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="pillars">
          <article><div className="pillar-icon"><Leaf/></div><small>01 / ORIGIN</small><h3>Nature-led inputs</h3><p>Farm-sourced raw materials form the starting point for our ingredient thinking.</p></article>
          <article><div className="pillar-icon"><Microscope/></div><small>02 / EXPERTISE</small><h3>Formulation science</h3><p>We use formulation knowledge to shape ingredients around client needs.</p></article>
          <article><div className="pillar-icon"><FlaskConical/></div><small>03 / ECOSYSTEM</small><h3>Connected capabilities</h3><p>Scientists, food technologists and manufacturing partners work as one network.</p></article>
        </div>
      </section>

      <section id="ingredients" className="ingredients section">
        <div className="section-label"><span>02 / OUR INGREDIENTS</span><span>FUNCTIONAL NUTRIENTS PORTFOLIO</span></div>
        <div className="ingredient-heading"><h2>Small details.<br/><em>Meaningful function.</em></h2><p>A first look at our functional nutrient portfolio — developed for food, beverage and nutraceutical applications.</p></div>
        <div className="ingredient-grid">{featured.map(p=><article className="ingredient-card" key={p.code}>
          <div className={`ingredient-art ${p.tint}`}><img src={p.image} alt={p.imageAlt} loading="lazy"/><div className="art-shade"></div><small>{p.n} / INGREDIENT</small><span>{p.type}</span></div>
          <div className="ingredient-info"><small>{p.code}</small><h3>{p.name}</h3><p>{p.desc}</p><a href="#contact">Enquire about this ingredient <ArrowUpRight size={15}/></a></div>
        </article>)}</div>
        <div className="portfolio-note"><span>ALSO IN OUR PORTFOLIO</span><span>FUNCTIONAL LIPIDS · FUNCTIONAL FIBERS · FUNCTIONAL SWEETENERS</span></div>
      </section>

      <section id="solutions" className="solutions">
        <div className="section solution-inner">
          <div className="section-label"><span>03 / BEYOND INGREDIENTS</span><span>CONSULTANCY ECOSYSTEM</span></div>
          <div className="solution-grid"><h2>Your idea deserves<br/>a path to <em>the market.</em></h2><div><p className="intro">A one-stop solution for brand owners.</p><p>We help develop and commercialize nutraceutical, functional food and beverage products through a connected ecosystem of formulation scientists, food technologists and contract manufacturers.</p><a className="primary-button" href="#contact">Talk to our team <ArrowUpRight size={16}/></a></div></div>
          <div className="capability-row"><div><span>01</span><Beaker/><strong>Formulation development</strong><p>From product concept to considered formulation.</p></div><div><span>02</span><FlaskConical/><strong>Contract manufacturing</strong><p>Connecting your product with manufacturing capabilities.</p></div><div><span>03</span><Sprout/><strong>Product applications</strong><p>Nutraceuticals, functional food and beverages.</p></div></div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="section-label"><span>04 / LET'S CONNECT</span><span>CONTACT FUNCTIONAL NUTRIENTS</span></div>
        <div className="contact-grid"><div><h2>Let's create<br/>what's <em>next.</em></h2><p className="intro">Have an ingredient enquiry or a product idea? We'd love to hear what you're working on.</p><a className="email-link" href="mailto:functionalnutrients@gmail.com"><Mail size={17}/> functionalnutrients@gmail.com <ArrowUpRight size={16}/></a><div className="ownership">FUNCTIONAL NUTRIENTS<br/>A brand owned by RxCo Pvt. Ltd.</div></div>
          <form className="contact-form" onSubmit={submit}><div className="form-top"><span>PROJECT ENQUIRY</span><span>LET'S TALK ↗</span></div>
            <div className="field-row"><label>Your name<input required name="name" value={form.name} onChange={update} placeholder="Full name"/></label><label>Company<input name="company" value={form.company} onChange={update} placeholder="Company name"/></label></div>
            <label>Email address<input type="email" required name="email" value={form.email} onChange={update} placeholder="you@company.com"/></label>
            <label>What are you interested in?<select required name="interest" value={form.interest} onChange={update}><option value="">Choose an area</option><option>Functional Nutrients</option><option>Formulation Development</option><option>Contract Manufacturing</option><option>Other enquiry</option></select></label>
            <label>Tell us a little more<textarea rows="3" name="message" value={form.message} onChange={update} placeholder="Your product idea or requirement..."/></label>
            <button className="primary-button submit-button" type="submit">Send an enquiry <ArrowUpRight size={16}/></button><small className="form-note">This demo form prepares an email to our team. It does not store submissions.</small>
          </form>
        </div>
      </section>
      {notice&&<div className="notice" role="status" aria-live="polite"><CheckCircle2 size={22}/><div><strong>Enquiry ready to send</strong><span>Your email app is opening with your message.</span></div></div>}
    </main>
    <footer className="footer"><div className="footer-top"><div><img src="/assets/functional-nutrients-logo.png" alt="Functional Nutrients"/><p>We are a nutrient technology company.</p></div><div className="footer-links"><small>EXPLORE</small>{nav.map(([l,h])=><a href={h} key={h}>{l}</a>)}</div><div className="footer-links"><small>GET IN TOUCH</small><a href="mailto:functionalnutrients@gmail.com">functionalnutrients@gmail.com <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a></div><div className="footer-monogram">FN<span>®</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} FUNCTIONAL NUTRIENTS</span><span>BRAND OWNED BY RXCO PVT. LTD.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </div>;
}