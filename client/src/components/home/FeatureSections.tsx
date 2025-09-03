'use client';

import React from 'react';
import Link from 'next/link';

const FeatureSections = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Don&apos;t Just Watch Events.
          <br />
          Predict Them. Profit From Them.
        </h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
          Clutch is the next-generation prediction market platform where your insights become investments. 
          Trade on real-world events with complete privacy and transparency.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/signin"
            className="px-6 py-2 rounded-full border border-zinc-800 text-white hover:border-zinc-700 text-sm transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 rounded-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-sm transition-colors"
          >
            Start Predicting
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-white text-xl font-light mb-3">Predict Smarter.</h3>
          <p className="text-zinc-400 text-sm">
            Turn your knowledge into profit by predicting outcomes of real-world events. 
            From sports and politics to crypto prices and market trends - if it&apos;s predictable, you can trade it on Clutch.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-white text-xl font-light mb-3">Trade Privately.</h3>
          <p className="text-zinc-400 text-sm">
            Your predictions remain completely private using advanced Multi-Party Computation (MPC) technology. 
            Trade with confidence knowing your strategies and positions are hidden until market resolution.
          </p>
          <Link
            href="/privacy"
            className="text-[#FF6B00] text-sm hover:underline mt-3 inline-block"
          >
            Learn about privacy →
          </Link>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-white text-xl font-light mb-3">
            Earn Rewards.
          </h3>
          <p className="text-zinc-400 text-sm">
            Accurate predictions are rewarded proportionally. The more precise your forecast, 
            the bigger your share of the prize pool. Built on Solana for lightning-fast settlements and minimal fees.
          </p>
          <Link
            href="/how-it-works"
            className="text-[#FF6B00] text-sm hover:underline mt-3 inline-block"
          >
            How rewards work →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSections;
