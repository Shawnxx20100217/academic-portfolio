const portfolioData = {
  concepts: [
    "legal ambiguity",
    "selective enforcement",
    "political participation",
    "censorship outsourcing",
    "digital authoritarianism",
  ],
  findings: [
    {
      title: "Unclear rules can affect participation before punishment occurs",
      body:
        "When legal boundaries are difficult to interpret, people may avoid certain topics or forms of participation even without direct enforcement.",
    },
    {
      title: "Selective enforcement makes political risk harder to judge",
      body:
        "Uneven enforcement can make rules feel unpredictable, which may lead citizens to rely on caution rather than formal rights alone.",
    },
    {
      title: "Platforms can become part of the enforcement environment",
      body:
        "Censorship outsourcing and platform moderation can create indirect limits on discussion, especially when companies respond to unclear political pressure.",
    },
  ],
  competitions: [
    {
      name: "NEC Economics Competition",
      time: "Date to be added",
      role: "Participant / Team Member",
      description:
        "Prepared for economics problem solving and case discussion through microeconomics, macroeconomics, and applied reasoning. This experience helped me connect classroom concepts with real-world economic questions.",
      skills: ["economic analysis", "case reasoning", "teamwork", "presentation"],
    },
    {
      name: "SIC / School Investment Challenge",
      time: "Date to be added",
      role: "Investment Research Contributor",
      description:
        "Worked on a student investment project that emphasized portfolio construction, investment thesis writing, sector allocation, risk analysis, and ESG considerations.",
      skills: ["portfolio construction", "investment thesis", "risk analysis", "ESG review"],
    },
    {
      name: "IPPF / International Public Policy Forum",
      time: "Date to be added",
      role: "Policy Research and Argumentation",
      description:
        "Practiced building policy arguments by evaluating evidence, considering counterarguments, and writing in a structured debate format.",
      skills: ["policy reasoning", "argumentation", "evidence evaluation", "writing"],
    },
    {
      name: "John Locke Essay Competition",
      time: "Date to be added",
      role: "Essay Writer",
      description:
        "Used the essay process to practice independent thinking, structured argument, and careful revision on political, economic, or philosophical questions.",
      skills: ["essay writing", "critical thinking", "research", "revision"],
    },
  ],
  metrics: [
    { label: "Portfolio Return", value: "To be added" },
    { label: "Benchmark", value: "To be added" },
    { label: "Holdings", value: "To be added" },
    { label: "Review Period", value: "To be added" },
  ],
  sectors: [
    {
      area: "Technology",
      allocation: "To be added",
      rationale: "Potential exposure to productivity growth, while requiring attention to valuation and concentration risk.",
    },
    {
      area: "Consumer / Healthcare",
      allocation: "To be added",
      rationale: "Possible defensive characteristics and demand resilience during slower growth periods.",
    },
    {
      area: "Financials / Industrials",
      allocation: "To be added",
      rationale: "Useful for studying business cycles, interest-rate sensitivity, and sector rotation.",
    },
  ],
  holdings: [
    {
      name: "Company / Ticker to be added",
      thesis:
        "Use this space for a short thesis explaining how the company fits the portfolio's sector view and investment framework.",
    },
    {
      name: "Company / Ticker to be added",
      thesis:
        "Add notes on valuation, competitive position, and the main risk that could weaken the thesis.",
    },
    {
      name: "Company / Ticker to be added",
      thesis:
        "Keep the analysis concise and evidence-based, with a clear reason for inclusion in the portfolio.",
    },
  ],
  writing: [
    {
      title: "Essay on Political Participation",
      topic: "Politics",
      description:
        "A future essay on how institutions, legal uncertainty, and social pressure can shape civic expression.",
      tag: "Politics",
    },
    {
      title: "Economic Writing Sample",
      topic: "Economics",
      description:
        "A writing sample connecting economic incentives with decisions made by individuals, firms, or governments.",
      tag: "Economics",
    },
    {
      title: "Public Policy Commentary",
      topic: "Public Policy",
      description:
        "A short commentary on how policy goals can change when they move from abstract ideas to implementation.",
      tag: "Public Policy",
    },
    {
      title: "Social Issues Reflection",
      topic: "Society",
      description:
        "A reflective piece on a social issue, with attention to evidence, institutions, and competing perspectives.",
      tag: "Society",
    },
  ],
};

const renderList = (selector, items, template) => {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = items.map(template).join("");
};

renderList("[data-concepts]", portfolioData.concepts, (concept) => `<span>${concept}</span>`);

renderList(
  "[data-findings]",
  portfolioData.findings,
  (item) => `
    <article class="argument-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `,
);

renderList(
  "[data-competitions]",
  portfolioData.competitions,
  (item) => `
    <article class="competition-card">
      <div class="card-topline">
        <h3>${item.name}</h3>
        <span class="time">${item.time}</span>
      </div>
      <p class="role">${item.role}</p>
      <p>${item.description}</p>
      <div class="skill-list">
        ${item.skills.map((skill) => `<span class="skill">${skill}</span>`).join("")}
      </div>
    </article>
  `,
);

renderList(
  "[data-metrics]",
  portfolioData.metrics,
  (item) => `
    <article class="metric-card">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </article>
  `,
);

renderList(
  "[data-sectors]",
  portfolioData.sectors,
  (item) => `
    <tr>
      <td>${item.area}</td>
      <td>${item.allocation}</td>
      <td>${item.rationale}</td>
    </tr>
  `,
);

renderList(
  "[data-holdings]",
  portfolioData.holdings,
  (item) => `
    <div class="holding">
      <strong>${item.name}</strong>
      <p>${item.thesis}</p>
    </div>
  `,
);

renderList(
  "[data-writing]",
  portfolioData.writing,
  (item) => `
    <article class="writing-card">
      <div>
        <div class="writing-meta">
          <span class="writing-tag">${item.tag}</span>
          <span class="writing-tag">${item.topic}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <a href="#" aria-label="Read more about ${item.title}">Read More</a>
    </article>
  `,
);

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});
