import React from "react";

const faqItems = [
  {
    question: "What Services do you offer as a Virtual Assistant?",
    answer: "I provide services that include basic administrative and clerical supports, calendar management, travel arrangements, and email handling. Among the other different tasks I could perform for you are social media management, customer support, personal errands. I can also personalize the services you need."
  },
  {
    question: "How do you communicate with clients?",
    answer: "I communicate mainly through email, by phone, or messaging applications, such as Slack, Zoom, WhatsApp. I will, however, be flexible enough to have an agreement with you so that our interaction is seamless."
  },
  {
    question: "What are your hours of work?",
    answer: "I work during normal business hours, but I can make arrangements for clients in other time zones. Should you need any assistance outside this time, we can surely discuss a custom-made schedule that would suit you."
  },
  {
    question: "How do you manage confidentiality and data security?",
    answer: "I give priority to confidentiality. I follow strict measures for data protection, and I am willing to sign any required confidentiality agreements to ensure that your sensitive information is secure. I am fully Insured and ICO registered."
  },
  {
    question: "How do you charge for your services?",
    answer: "I work for an hourly rate, in a retained approach, and on project-based fees depending on the level of work and frequency of work. Contact me directly to discuss pricing options based on your specific needs."
  },
  {
    question: "How do you track time spent on tasks?",
    answer: "I use time-tracking tools such as Toggl and Clockify time tracker to record hours worked on every task. This guarantees transparency, so you will be well aware of how much time is being consumed by the particular project."
  },
  {
    question: "Can you work on short notice or under urgent terms of reference?",
    answer: "Yes, I am available to do last-minute urgent work. Please try and let me know in advance if possible, and we can discuss your timeline."
  },
  {
    question: "Do you work on long-term or one-time projects?",
    answer: "I'm flexible! I can work with you on either a one-time project or provide support over a longer duration, depending on your needs."
  },
  {
    question: "How do we get started?",
    answer: "Just get in touch, either by booking a discovery call or email, to book a consultation. We would then talk about the need, the goals, and how I could assist in supporting the business."
  },
  {
    question: "Do you have experience in my industry?",
    answer: "I have worked across different industries, such as Energy (EON Next), furniture retail company (IKEA), Cosmetology Industry (Abroad). And if you are in doubt about whether I might be a good fit, we can discuss your industry specifically when we meet."
  }
];

function Faq() {
  return (
    <div className="py-8 px-4 sm:py-12 sm:px-6 lg:px-8 mt-7">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bold text-2xl mb-6 text-center sm:text-left">
          Frequently asked questions
        </h1>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group border-l-4 border-primary bg-gray-50 p-4 sm:p-6 [&_summary::-webkit-details-marker]:hidden"
              open={index === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  {item.question}
                </h2>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;