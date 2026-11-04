import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, Leaf, FlaskConical, Sprout, Microscope, Beaker, CheckCircle2, Mail, ChevronDown } from 'lucide-react';

const featured = [
  { n:'01', type:'FUNCTIONAL PROTEIN', name:'Omega Protein Complex', code:'OPC', category:'proteins', desc:'Formulated to control inflammation and improve muscle growth through the synergistic action of omega-3 and protein.', tint:'sage', image:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=85', imageAlt:'Salmon and greens representing omega-rich nutrition' },
  { n:'02', type:'FUNCTIONAL FIBER', name:'Myrobalan Prebiotic Fiber', code:'MPF', category:'fibers', desc:'Formulated to improve gut health by supporting the gut microbiome and reducing systemic gut inflammation.', tint:'lilac', image:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85', imageAlt:'Whole-grain bread representing plant-based fiber' },
  { n:'03', type:'FUNCTIONAL FIBER', name:'Myrobalan Prebiotic Fiber Water Soluble', code:'MPFWS', category:'fibers', desc:'A water-soluble form for functional beverages, formulated to support the gut microbiome and reduce systemic gut inflammation.', tint:'lilac', image:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85', imageAlt:'Whole-grain bread representing plant-based fiber' },
  { n:'04', type:'FUNCTIONAL LIPID', name:'Omega 369', code:'Omega 369', category:'lipids', desc:'A complete omega complex containing omega-3 (alpha-linolenic acid), omega-6 (linoleic acid), and omega-9 (oleic acid) to support muscle, joint, heart, and cognitive health.', tint:'sage', image:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=85', imageAlt:'Omega-rich food representing functional lipids' },
  { n:'05', type:'FUNCTIONAL SWEETENER', name:'Monk Fruit Allulose Complex', code:'Formcal Zero MA', category:'sweeteners', desc:'Formulated to replace sugar in food and beverages at a 1:1 equivalent dosage, with no glucose spike and one-tenth the calories of sugar.', tint:'peach', image:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85', imageAlt:'Fresh fruit and vegetables representing naturally sweetened foods' },
  { n:'06', type:'FUNCTIONAL SWEETENER', name:'Monk Fruit Prebiotic Fiber', code:'Formcal Zero MF2', category:'sweeteners', desc:'Formulated to provide dietary fiber with sweetness for functional beverages.', tint:'peach', image:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85', imageAlt:'Fresh fruit and vegetables representing naturally sweetened foods' }
];
const portfolioCategories = [
  { id:'proteins', label:'Functional Proteins' },
  { id:'fibers', label:'Functional Fibers' },
  { id:'lipids', label:'Functional Lipids' },
  { id:'sweeteners', label:'Functional Sweeteners' }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({name:'', company:'', email:'', phone:'', interest:'', message:''});
  const [notice, setNotice] = useState(false);
  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(false), 4500);
    return () => window.clearTimeout(timeout);
  }, [notice]);
  const nav = [['About Us','#approach'],['Functional Nutrients','#ingredients'],['Consultancy Ecosystem','#solutions'],['Contact Us','#contact']];
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => {
    e.preventDefault();
    const subject = encodeURIComponent('Website enquiry — Functional Nutrients');
    const body = encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nContact Number: ${form.phone}\nInterested in: ${form.interest}\nAdditional Needs: ${form.message}`);
    setNotice(true);
    setForm({name:'', company:'', email:'', phone:'', interest:'', message:''});
    window.setTimeout(() => {
      window.location.href = `mailto:functionalnutrients@gmail.com?subject=${subject}&body=${body}`;
    }, 350);
  };

  return <div className="page">
    <header className="header">
      <a href="#home" className="logo"><img src="/assets/functional-nutrients-logo.png" alt="Functional Nutrients"/></a>
      <nav className={menuOpen?'nav nav-open':'nav'}>{nav.map(([label,href])=><a href={href} key={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav>
      <button className="menu-button" aria-label="Toggle menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <h1>Functional<br/><em>Nutrients.</em></h1>
          <p className="hero-description">We formulate functional nutrients for functional food, functional beverages, and nutraceuticals, as per client needs.</p>
          <div className="hero-actions"><a className="primary-button" href="#ingredients">Functional Nutrients Portfolio <ArrowUpRight size={17}/></a><a className="quiet-link" href="#solutions">Consultancy Ecosystem <ArrowRight size={16}/></a></div>
        </div>
        <div className="hero-visual">
          <div className="visual-frame"><img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1500&q=90" alt="Fresh green botanical ingredients and leaves"/></div>
          <div className="visual-orbit orbit-a"></div><div className="visual-orbit orbit-b"></div>
        </div>
      </section>

      <div className="marquee"><div>FUNCTIONAL FOOD <i>✳</i> FUNCTIONAL BEVERAGES <i>✳</i> NUTRACEUTICALS <i>✳</i> FUNCTIONAL FOOD <i>✳</i> FUNCTIONAL BEVERAGES <i>✳</i> NUTRACEUTICALS <i>✳</i></div></div>

      <section id="approach" className="approach section">
        <div className="section-label"><span>01 / ABOUT US</span><span>FUNCTIONAL NUTRIENTS</span></div>
        <div className="approach-grid">
          <h2>We are a<br/><em>Nutrient Technology</em> Company.</h2>
          <div className="approach-copy"><p className="intro">We formulate functional nutrients for functional food, functional beverages, and nutraceuticals, as per client needs.</p><p>We use advanced formulation technologies to convert farm-sourced raw materials into functional nutrients. Our ecosystem of formulation scientists, food technologists, and contract manufacturers helps brand owners develop and commercialize efficient, effective nutritional products.</p><a href="#ingredients" className="under-link">Functional Nutrients Portfolio <ArrowUpRight size={16}/></a> <a href="#solutions" className="under-link">Consultancy Ecosystem <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="pillars">
          <article><div className="pillar-icon"><Leaf/></div><small>01 / RAW MATERIALS</small><h3>Farm-sourced inputs</h3><p>Farm-sourced raw materials are converted into functional nutrients.</p></article>
          <article><div className="pillar-icon"><Microscope/></div><small>02 / FORMULATION</small><h3>Advanced technologies</h3><p>Formulation technologies shape nutrients to meet client needs.</p></article>
          <article><div className="pillar-icon"><FlaskConical/></div><small>03 / ECOSYSTEM</small><h3>Built for brand owners</h3><p>Scientists, food technologists, and contract manufacturers support product development and commercialization.</p></article>
        </div>
        <div className="founders">
          <div className="founder-heading"><span>ABOUT THE FOUNDERS</span><span>CO-FOUNDERS</span></div>
          <div className="founder-grid">
            <article><small>CO-FOUNDER</small><h3>Dr. Niraj Bafna</h3><p>Dr. Niraj Bafna holds a Doctor of Pharmacy degree and has pursued healthcare innovation training at Harvard Medical School and MIT in Boston. He founded EFFIPAC, a healthcare startup focused on medication management, gaining experience in building and scaling healthcare solutions. With additional experience in pharmaceutical distribution and international business, he brings clinical knowledge, entrepreneurial experience, and supply chain expertise to developing Functional Nutrients.</p></article>
            <article><small>CO-FOUNDER</small><h3>Mr. Kaustubh Pawar</h3><p>Mr. Kaustubh Pawar is a formulation scientist with a master’s degree in Pharmaceutics from ICT Mumbai. He has worked with Lupin and Biocon Biologics, then consulted MSMEs and startups on formulation and business development across personal care, nutraceutical, food and beverage, and animal nutrition sectors. He now formalizes his consultancy venture to provide effective, efficient functional nutritional products.</p></article>
          </div>
        </div>
      </section>

      <section id="ingredients" className="ingredients section">
        <div className="section-label"><span>02 / FUNCTIONAL NUTRIENTS</span><span>FUNCTIONAL FOOD · BEVERAGES · NUTRACEUTICALS</span></div>
        <div className="ingredient-heading"><h2>Functional Nutrients<br/><em>Portfolio.</em></h2><p>Functional nutrients for functional food, functional beverages, and nutraceuticals.</p></div>
        <div className="portfolio-categories" aria-label="Product categories">{portfolioCategories.map(category=><a href={`#${category.id}`} key={category.id}>{category.label}<ArrowRight size={14}/></a>)}</div>
        <div className="ingredient-grid">{featured.map((p,index)=><article className="ingredient-card" id={featured.findIndex(product=>product.category===p.category)===index?p.category:undefined} key={p.code}>
          <div className={`ingredient-art ${p.tint}`}><img src={p.image} alt={p.imageAlt} loading="lazy"/><div className="art-shade"></div><small>{p.n} / INGREDIENT</small><span>{p.type}</span></div>
          <div className="ingredient-info"><small>{p.code}</small><h3>{p.name}</h3><p>{p.desc}</p><a className="product-cta" href="#contact">{p.category==='proteins'?'Connect to know more':'Enquire about this product'} <ArrowUpRight size={15}/></a></div>
        </article>)}</div>
      </section>

      <section id="solutions" className="solutions">
        <div className="section solution-inner">
          <div className="section-label"><span>03 / BEYOND INGREDIENTS</span><span>CONSULTANCY ECOSYSTEM</span></div>
          <div className="solution-grid"><h2>Consultancy<br/><em>Ecosystem.</em></h2><div><p className="intro">One-stop solution for brand owners.</p><p>We help brand owners develop and commercialize nutraceutical, functional food, and beverage products through our consultancy program. Our team of formulation scientists, food technologists, and contract manufacturers helps you build legacy brands.</p><a className="primary-button" href="#contact">Connect to know more <ArrowUpRight size={16}/></a></div></div>
          <div className="capability-row">
            <div><span>01</span><Beaker/><strong>Formulation development</strong><p><b>Nutraceuticals</b> — powder, capsules.<br/><b>Functional food</b> — bakery, confectionery, snacks, premixes, spreads, ready to eat.<br/><b>Functional beverages</b> — shakes, non-carbonated, carbonated, dairy products.</p></div>
            <div><span>02</span><FlaskConical/><strong>Contract manufacturing</strong><p><b>Nutraceuticals</b> — powder, capsules, liquids.<br/><b>Functional food</b> — bakery, confectionery, snacks, premixes, spreads, ready to eat.<br/><b>Functional beverages</b> — shakes, non-carbonated, carbonated, dairy products.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="section-label"><span>04 / LET'S CONNECT</span><span>CONTACT FUNCTIONAL NUTRIENTS</span></div>
        <div className="contact-grid"><div><h2>Contact<br/><em>Us.</em></h2><a className="email-link" href="mailto:functionalnutrients@gmail.com"><Mail size={17}/> functionalnutrients@gmail.com <ArrowUpRight size={16}/></a><div className="ownership">FUNCTIONAL NUTRIENTS<br/>A brand owned by RxCo Pvt. Ltd.</div></div>
          <form className="contact-form" onSubmit={submit}><div className="form-top"><span>PROJECT ENQUIRY</span><span>LET'S TALK ↗</span></div>
            <div className="field-row"><label>Company Name<input name="company" value={form.company} onChange={update} placeholder="Company name"/></label><label>Name<input required name="name" value={form.name} onChange={update} placeholder="Full name"/></label></div>
            <div className="field-row"><label>Email ID<input type="email" required name="email" value={form.email} onChange={update} placeholder="you@company.com"/></label><label>Contact Number<input type="tel" name="phone" value={form.phone} onChange={update} placeholder="Phone number"/></label></div>
            <label>Interested in<select required name="interest" value={form.interest} onChange={update}><option value="">Choose from the list</option><optgroup label="Functional Nutrients"><option>Functional Protein</option><option>Functional Fiber</option><option>Functional Lipid</option><option>Functional Sweetener</option></optgroup><optgroup label="Formulation Development"><option>Formulation Development — Functional Food</option><option>Formulation Development — Functional Beverage</option><option>Formulation Development — Nutraceutical</option></optgroup><optgroup label="Contract Manufacturing"><option>Contract Manufacturing — Functional Food</option><option>Contract Manufacturing — Functional Beverage</option><option>Contract Manufacturing — Nutraceutical</option></optgroup></select></label>
            <label>Any Additional Needs<textarea rows="3" name="message" value={form.message} onChange={update} placeholder="Share any additional needs..."/></label>
            <button className="primary-button submit-button" type="submit">Send an enquiry <ArrowUpRight size={16}/></button>
          </form>
        </div>
      </section>
      {notice&&<div className="notice" role="status" aria-live="polite"><CheckCircle2 size={22}/><div><strong>Enquiry ready to send</strong><span>Your email app is opening with your message.</span></div></div>}
    </main>
    <footer className="footer"><div className="footer-top"><div><img src="/assets/functional-nutrients-logo.png" alt="Functional Nutrients"/><p>We are a nutrient technology company.</p></div><div className="footer-links"><small>EXPLORE</small>{nav.map(([l,h])=><a href={h} key={h}>{l}</a>)}</div><div className="footer-links"><small>GET IN TOUCH</small><a href="mailto:functionalnutrients@gmail.com">functionalnutrients@gmail.com <ArrowUpRight size={13}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} FUNCTIONAL NUTRIENTS</span><span>BRAND OWNED BY RXCO PVT. LTD.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </div>;
}