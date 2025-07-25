import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const plans = [
  {
    name: 'Basic',
    price: '$59/month',
    features: [
      'Free initial consultation',
      '1× per 2 weeks training plan update',
      '1× per 2 weeks training plan update',
      'Weekly checking'
    ],
    image: './images/runner2.jpg'
  },
  {
    name: 'Standard',
    price: '$89/month',
    features: [
      'Everything in Basic',
      'Weekly training plan updates',
      'Monthly video call',
      'Race strategy planning'
    ],
    image: './images/runner.jpg'
  },
  {
    name: 'Premium',
    price: '$129/month',
    features: [
      'Everything in Standard',
      'Unlimited adjustments',
      'Real-time performance tracking',
      'Nutrition guidance'
    ],
    image: './images/m2.jpg'
  }
];

export default function CoachingPlanSingle() {
  return (
    <section id='coaching' className="w-full px-4 py-20 bg-white text-black flex flex-col items-center mt-10">
      <h2 className="text-4xl md:text-5xl  text-center mb-16">
        Coaching plans
      </h2>

      {/* Cards */}
      <div className="flex flex-col gap-12 items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white sticky top-[50px] rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row max-w-5xl w-full"
          >
         
            <div className="w-full md:w-1/2 px-4 py-4 h-64 md:h-auto">
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

        
            <div className="p-8 md:p-10 flex flex-col justify-between gap-6 w-full md:w-1/2">
              <div>
                <p className="text-gray-500 text-sm mb-1">{plan.price}</p>
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>

                <ul className="text-sm space-y-3 text-gray-950 ">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-lg text-gray-950 font-semibod ">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button className="mt-2 inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 text-sm rounded-full hover:bg-gray-800 transition w-fit">
                <a href='/contact'>Get in touch</a>  
                <FaArrowUpRightFromSquare className="text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
