var questions = [
 "Laser-targeted outreach, driving unparalleled conversions",
"Cutting-edge AI tools at your fingertips, empowering every business decision",
"State-of-the-art compute power, scaling your business without limits",
"Expert AI consultants, guiding you to exponential growth",
"The most advanced AI chatbots, seamlessly integrated into your website",
"No cure, no pay model, ensuring results-driven partnerships",
"Personalized automation, tailored to your specific business needs",
"Unmatched precision in lead generation, boosting your sales pipeline",
"Real-time data analysis, unlocking insights you never knew existed",
"Future-proof your business with AI solutions that evolve with you",
"Effortless scalability, powered by next-gen automation",
"AI-driven strategies, propelling your business ahead of the competition",
"Fully integrated systems, streamlining your processes end to end",
"Transform customer engagement with intelligent, responsive chatbots",
"Affordable innovation, only pay when we deliver measurable success",
"Experience rapid growth with AI that works around the clock",
"Take control of your market with smart, automated outreach",
"Instant AI deployment, driving business results from day one",
"Hyper-personalized marketing, connecting with your audience on a deeper level",
"Advanced analytics, providing actionable insights into every business move",
"Optimize your workflows with AI-powered process automation",
"Custom AI solutions, designed specifically for your industry",
"Turn complex data into powerful business decisions with AI analysis",
"24/7 lead generation, keeping your pipeline full while you sleep",
"Maximize productivity by automating repetitive tasks instantly",
"AI-enhanced customer support, providing fast and accurate responses",
"Boost conversion rates with targeted, data-driven campaigns",
"Reduce operational costs with streamlined, AI-powered efficiency",
"Expand your market reach effortlessly with global, automated outreach",
"Leverage big data for smarter, faster business decisions",
"Outperform your competitors with AI that never stops optimizing",
"Supercharge your marketing with AI that learns and adapts",
"Get the right leads at the right time with real-time AI targeting",
"Stay ahead of trends with AI predictive analysis",
"Instantly scale your team with virtual AI assistants",
"Drive engagement and sales with intelligent chatbots handling customer inquiries",
"Cut your marketing costs by automating your entire outreach",
"AI that continuously evolves, keeping your business at the forefront",
"Effortless integration with your existing systems and workflows",
"Automate routine tasks, freeing up your team for higher-value work",
"Increase efficiency with seamless AI-driven business operations",
"Bring down response times with instant, AI-driven customer interactions",
"Never miss an opportunity with AI that captures every lead",
"Lower risk and boost profits with precision AI-based decision-making",
"AI that scales with your business, no matter how fast you grow",
"Discover hidden business opportunities with in-depth AI data mining",
"Eliminate human error with flawless, AI-powered automation",
"Increase client retention with personalized, data-backed strategies",
"Fuel your growth engine with smart automation handling your back-office tasks",
"Outsource complexity to AI, and focus on your core business strengths",
"Grow your business sustainably, with AI optimizing every aspect of operations",
"Get instant insights on competitor activity with AI-driven intelligence",
"Dominate your market with a laser-focused AI-powered marketing machine",
"Automated follow-ups, ensuring you never lose touch with potential clients",
"AI-powered content creation, delivering quality at speed and scale",
"Real-time business health monitoring, ensuring you stay on top of everything",
"Boost customer satisfaction with AI-driven, proactive service offerings",
"Optimize your sales funnel with smart, AI-based suggestions",
"Seamless cross-platform integration, uniting all your tools into one intelligent system",
"Turn your website into a conversion machine with AI-enhanced user experience",
"AI-assisted business planning, making your future growth predictable and manageable",
"Access powerful AI tools with zero learning curve, ready to go from day one",
"Create better customer experiences with intelligent, personalized interactions",
"Smart decision-making at every level, powered by AI that learns as you grow",
"Reach new markets with AI-driven insights and hyper-targeted outreach",
"Scale globally without additional overhead, thanks to automation",
"Transform your business model with AI-enabled innovation and growth",
"Stay competitive with cutting-edge AI tools that are always learning",
"Turn challenges into opportunities with AI that predicts and reacts instantly",
"Achieve operational excellence with end-to-end AI-powered efficiency",
"Outreach that evolves, adapting to customer behavior in real-time",
"Convert website visitors into clients with AI-enhanced lead capture tools",
"Leverage AI to automate your entire sales process, from lead to conversion",
"Revolutionize your marketing with data-driven insights and AI-driven execution",
"Take the guesswork out of business decisions with real-time AI insights",
"Turn your data into a goldmine with AI-powered analytics and forecasting",
"Automate your business with tools that scale effortlessly with your growth",
"Capture, nurture, and convert leads all in one seamless AI-powered process",
"Unlock new revenue streams with AI that identifies and targets key opportunities",


];

var cursorBackgrounds = [
  "https://media3.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif?cid=790b76113bb746b4204131179218b2fde4957f0b20551378&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/kPtv3UIPrv36cjxqLs/giphy.gif?cid=790b7611f8f5dcf9176a25b583bbdd78254255b6d51643d1&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/l0HlUsr30YgIHASl2/giphy.gif?cid=790b7611d31ab08cfa5e3046f529af2d7d58c99bf0b449b2&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/xUA7b6G577b74RSS3e/giphy.gif?cid=ecf05e47a7sumhjwkxl5u584moobx5f4mlb6040dlzowjkm6&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/a5viI92PAF89q/giphy.gif?cid=790b7611c4b2fb606863c8b973000ff9812a542d127c5cdb&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif?cid=ecf05e47jmhordafv96a3d6okxlagswr3ti7buh8pajfhi1a&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/hv53DaYcXWe3nRbR1A/giphy.gif?cid=ecf05e47jf2zrq2ozzq860irai5m6oam10hakvvd4r0hnkaw&rid=giphy.gif&ct=g"
], previousBg;

var h1 = document.querySelector('h1');
var btn = document.querySelector('.button');

function init() {
  btn.addEventListener('click', function() {
    newQuestion();
  })
  
  newQuestion();
}

function newQuestion() {
  h1.innerHTML = questions[Math.floor(Math.random() * questions.length)];
  var tl = gsap.timeline(), mySplitText = new SplitText(h1, {type: "words,chars"}), chars = mySplitText.chars;

  tl.from(chars, {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 150,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01
  }); 
}

var cursor = document.querySelector('.cursor');

function moveCircle(e) {
	gsap.set(cursor, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);

$('.button').mouseover(function() {
  randomBg();
  $('.cursor').css('display', 'block');
});

function randomBg() {
  var random = Math.floor(Math.random() * cursorBackgrounds.length);
  
  if(random === previousBg) {
    if(random == cursorBackgrounds.length) random--
    else random++;
  }
  
  previousBg = random;
  $('.cursor').css('background', 'url(' + cursorBackgrounds[random] + ')');
  $('.cursor').css('background-size', 'cover');
  $('.cursor').css('background-position', 'center');
}

$('.button').mouseleave(function() {
  $('.cursor').css('display', 'none');
});

window.onload = init;
