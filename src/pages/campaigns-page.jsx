import { useState } from "react";

export default function Campaigns() {
  return (
    <div className="container-md">
      <section className="campaigns-secion">
        <div className="row">
          <div className="col">
            <h1 className="section-title display-5 fw-bold text-warning">
              Live Campaigns
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

const cardSelectedStyle = {
  boxShadow: "0 0 0 0.25rem rgba(255, 193, 7, 0.25)",
  width: "100%",
};


function CampaignCard() {
  return <div className="campaign-card">
    
  </div>;
}

const demoCampaigns = [
  {
    name: "LaunchX",
    objective: "Promote the new product X and drive sales",
    targetAudience: "Young professionals aged 25-35 interested in technology",
    message:
      "Experience the future with Product X. Revolutionary features and cutting-edge design.",
    channels: ["Social media", "Email marketing", "Influencer partnerships"],
    timeline: {
      start: "2023-06-01",
      end: "2023-07-15",
    },
    budget: 50000,
    metrics: [
      "Number of product inquiries",
      "Website traffic",
      "Conversion rate",
    ],
    team: ["Marketing Manager", "Graphic Designer", "Social Media Specialist"],
    risks: [
      "Competitor product launch",
      "Limited budget for extensive advertising",
    ],
  },
  {
    name: "Vote4Change",
    objective: "Secure victory in the local council election",
    targetAudience: "Registered voters in District 5",
    message: "Together, we can make a difference. Vote for a better future.",
    channels: [
      "Door-to-door canvassing",
      "Local radio ads",
      "Community events",
    ],
    timeline: {
      start: "2023-08-01",
      end: "2023-10-15",
    },
    budget: 25000,
    metrics: ["Voter turnout", "Polling station results"],
    team: ["Campaign Manager", "Field Coordinator", "Volunteer Coordinator"],
    risks: ["Negative publicity", "Low voter engagement"],
  },
  {
    name: "GreenEarth",
    objective:
      "Raise awareness about climate change and promote sustainable practices",
    targetAudience: "General public, especially young adults",
    message: "Protect our planet. Act now for a greener future.",
    channels: ["Social media", "Educational workshops", "Online petitions"],
    timeline: {
      start: "2023-09-01",
      end: "2024-03-31",
    },
    budget: 10000,
    metrics: [
      "Social media engagement",
      "Number of workshop attendees",
      "Petition signatures",
    ],
    team: ["Campaign Coordinator", "Content Writer", "Event Planner"],
    risks: ["Lack of media coverage", "Resistance from certain industries"],
  },
  {
    name: "Fit4Life",
    objective:
      "Promote healthy lifestyle choices and raise awareness about common health issues",
    targetAudience: "General population, particularly adults aged 30-50",
    message:
      "Your health, your choice. Start your journey to a healthier life today.",
    channels: [
      "Television commercials",
      "Online articles",
      "Community health fairs",
    ],
    timeline: {
      start: "2023-10-01",
      end: "2024-03-31",
    },
    budget: 35000,
    metrics: [
      "Participation in health fairs",
      "Website engagement",
      "Positive behavior change",
    ],
    team: [
      "Campaign Director",
      "Health Educator",
      "Public Relations Specialist",
    ],
    risks: ["Competing health campaigns", "Low motivation for behavior change"],
  },
  {
    name: "HopeRising",
    objective:
      "Provide emergency relief and support to communities affected by natural disasters",
    targetAudience: "Donors, volunteers, and disaster-affected communities",
    message: "Together, we can rebuild lives and restore hope.",
    channels: [
      "Crowdfunding platforms",
      "Social media appeals",
      "Local disaster response centers",
    ],
    timeline: {
      start: "2023-11-01",
      end: "2024-01-31",
    },
    budget: 50000,
    metrics: [
      "Funds raised",
      "Number of volunteers recruited",
      "Relief distribution progress",
    ],
    team: [
      "Campaign Coordinator",
      "Fundraising Manager",
      "Field Operations Officer",
    ],
    risks: ["Donor fatigue", "Logistical challenges in delivering aid"],
  },
  {
    name: "Learn4All",
    objective:
      "Promote access to quality education for underprivileged children",
    targetAudience: "Donors, educators, and disadvantaged communities",
    message: "Education is the key to unlocking a brighter future for all.",
    channels: [
      "Online fundraising campaigns",
      "School partnerships",
      "Educational workshops",
    ],
    timeline: {
      start: "2023-09-01",
      end: "2024-06-30",
    },
    budget: 60000,
    metrics: [
      "Funds raised",
      "Number of scholarship recipients",
      "Educational outcomes",
    ],
    team: [
      "Campaign Manager",
      "Partnerships Coordinator",
      "Educational Outreach Specialist",
    ],
    risks: ["Limited resources", "Challenges in reaching remote communities"],
  },
  {
    name: "Paws4Cause",
    objective:
      "Raise awareness about animal welfare issues and promote responsible pet ownership",
    targetAudience: "Animal lovers, pet owners, and the general public",
    message: "Be their voice. Stand up for animal rights.",
    channels: [
      "Social media advocacy",
      "Pet adoption events",
      "Legislative lobbying",
    ],
    timeline: {
      start: "2023-12-01",
      end: "2024-05-31",
    },
    budget: 40000,
    metrics: [
      "Social media reach",
      "Number of adoptions",
      "Policy changes influenced",
    ],
    team: [
      "Campaign Coordinator",
      "Volunteer Coordinator",
      "Policy Advocacy Specialist",
    ],
    risks: [
      "Limited public support",
      "Resistance from animal industry stakeholders",
    ],
  },
  {
    name: "MindMatters",
    objective: "Reduce stigma around mental health and promote well-being",
    targetAudience:
      "General population, especially young adults and working professionals",
    message:
      "Your mental health matters. Let's break the silence and prioritize well-being.",
    channels: [
      "Social media campaigns",
      "Webinars and workshops",
      "Community support groups",
    ],
    timeline: {
      start: "2023-10-01",
      end: "2024-03-31",
    },
    budget: 30000,
    metrics: [
      "Social media engagement",
      "Attendance at workshops",
      "Positive attitude change",
    ],
    team: [
      "Campaign Coordinator",
      "Mental Health Educator",
      "Community Outreach Specialist",
    ],
    risks: [
      "Lack of awareness about mental health",
      "Resistance to seeking help",
    ],
  },
  {
    name: "EqualVoice",
    objective: "Promote equality, diversity, and inclusion in society",
    targetAudience: "General public, policy-makers, and organizations",
    message: "Together, we can build a world where everyone's voice is heard.",
    channels: [
      "Public demonstrations",
      "Social media activism",
      "Educational seminars",
    ],
    timeline: {
      start: "2023-09-01",
      end: "2024-06-30",
    },
    budget: 50000,
    metrics: [
      "Number of participants in demonstrations",
      "Social media reach",
      "Policy changes influenced",
    ],
    team: [
      "Campaign Director",
      "Community Organizer",
      "Policy Advocacy Coordinator",
    ],
    risks: ["Pushback from opposing groups", "Resistance to change"],
  },
  {
    name: "Ready4Action",
    objective:
      "Educate communities about disaster preparedness and emergency response",
    targetAudience: "Residents in high-risk areas prone to natural disasters",
    message:
      "Be prepared, stay safe. Together, we can make a difference when disaster strikes.",
    channels: [
      "Community workshops",
      "Emergency drills",
      "Disaster preparedness kits distribution",
    ],
    timeline: {
      start: "2023-11-01",
      end: "2024-04-30",
    },
    budget: 45000,
    metrics: [
      "Number of workshop attendees",
      "Participation in emergency drills",
      "Distribution of preparedness kits",
    ],
    team: [
      "Campaign Coordinator",
      "Emergency Response Specialist",
      "Community Engagement Officer",
    ],
    risks: [
      "Complacency among community members",
      "Limited funding for resources",
    ],
  },
];
