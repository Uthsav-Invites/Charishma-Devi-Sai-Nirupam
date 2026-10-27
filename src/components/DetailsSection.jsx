import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import {
  RoyalLotusDivider,
  CalendarIconExact,
  ClockIconExact,
  LocationIconExact,
  DiyaMotif,
} from './TraditionalMotifs';
import { FaCalendarPlus, FaDirections } from 'react-icons/fa';

const DetailsSection = () => {
  const { event, schedule, venue, bride, groom } = INVITATION_CONFIG;

  const targetDate = new Date(schedule.isoDate).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `Engagement Ceremony: ${bride.fullName} & ${groom.fullName}`
  )}&dates=20261029T053400Z/20261029T083400Z&details=${encodeURIComponent(
    `Auspicious Engagement Ceremony of ${bride.fullName} and ${groom.fullName}. Muhurtham at ${schedule.muhurthamTime} IST.`
  )}&location=${encodeURIComponent(venue.fullAddress)}`;

  return (
    <section className="py-14 px-4 sm:px-6 flex flex-col items-center relative overflow-hidden bg-[#FBF6EB]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-6"
      >
        <div className="flex items-center justify-center gap-2.5 mb-1.5">
          <DiyaMotif className="w-5 sm:w-6 h-5 sm:h-6 text-[#9E782F]" />
          <h2 className="font-cormorant italic font-bold text-2xl sm:text-3xl text-[#820A24] tracking-wide">
            Shubha Muhurtham &amp; Venue
          </h2>
          <DiyaMotif className="w-5 sm:w-6 h-5 sm:h-6 text-[#9E782F]" />
        </div>

        {/* Beautiful Traditional Gold Lotus Divider */}
        <RoyalLotusDivider className="my-2 max-w-[260px] mx-auto" />
      </motion.div>

      {/* Main Event Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="w-full max-w-[500px] bg-[#FDF9F0] rounded-lg p-5 sm:p-7 border-[2px] border-[#C5A15B] shadow-[0_12px_35px_rgba(72,52,36,0.12)] relative z-10"
      >
        {/* Inner thin border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/50 rounded pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Heading */}
          <div className="flex flex-col items-center mb-5">
            <span className="font-cormorant italic text-lg sm:text-xl text-[#9E782F] font-medium">
              Auspicious Ceremony Details
            </span>
            <h3 className="font-cinzel text-lg sm:text-xl text-[#820A24] tracking-[0.2em] uppercase font-bold mt-0.5">
              {event.title}
            </h3>
            <p className="font-cormorant text-xs sm:text-[13px] text-[#483424] font-medium mt-1 max-w-xs">
              {event.invitationNote}
            </p>
          </div>

          {/* 3 Detail Rows */}
          <div className="w-full flex flex-col gap-3 my-2 text-left bg-[#FAF3E6] p-4 rounded border border-[#C5A15B]/40">
            {/* Date */}
            <div className="flex items-center gap-3">
              <CalendarIconExact className="w-7 h-7 text-[#9E782F] shrink-0" />
              <div className="w-[1.5px] h-8 bg-[#C5A15B]/70 shrink-0"></div>
              <div className="flex flex-col">
                <span className="font-cormorant font-semibold tracking-wider uppercase text-[11px] text-[#9E782F]">
                  {schedule.dayOfWeek}
                </span>
                <span className="font-cormorant font-bold text-base sm:text-lg text-[#820A24]">
                  {schedule.dateFormatted}
                </span>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-3">
              <ClockIconExact className="w-7 h-7 text-[#9E782F] shrink-0" />
              <div className="w-[1.5px] h-8 bg-[#C5A15B]/70 shrink-0"></div>
              <div className="flex flex-col">
                <span className="font-cormorant font-semibold tracking-wider uppercase text-[11px] text-[#9E782F]">
                  MUHURTHAM
                </span>
                <span className="font-cormorant font-bold text-base sm:text-lg text-[#820A24]">
                  {schedule.muhurthamTime} (IST)
                </span>
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-start gap-3">
              <LocationIconExact className="w-7 h-7 text-[#9E782F] shrink-0 mt-0.5" />
              <div className="w-[1.5px] h-10 bg-[#C5A15B]/70 shrink-0"></div>
              <div className="flex flex-col">
                <span className="font-cormorant font-semibold tracking-wider uppercase text-[11px] text-[#9E782F]">
                  VENUE:
                </span>
                <span className="font-cormorant font-bold text-sm sm:text-base text-[#820A24]">
                  {venue.name}
                </span>
                <span className="font-cormorant font-semibold text-xs text-[#820A24] uppercase">
                  {venue.street}, {venue.city}, {venue.state}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center my-4">
            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#820A24] text-[#FAF3E6] rounded-full font-cormorant text-sm tracking-wider uppercase font-bold shadow hover:bg-[#630519] transition-all duration-300"
            >
              <FaDirections size={14} />
              <span>Open in Google Maps</span>
            </a>

            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FDF9F0] border border-[#C5A15B] text-[#820A24] rounded-full font-cormorant text-sm tracking-wider uppercase font-bold shadow-sm hover:bg-[#FAF3E6] transition-all duration-300"
            >
              <FaCalendarPlus size={14} className="text-[#9E782F]" />
              <span>Add to Calendar</span>
            </a>
          </div>

          {/* Countdown Timer */}
          <div className="w-full pt-3 border-t border-[#C5A15B]/40">
            <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-[#9E782F] font-bold block mb-2">
              {/* COUNTDOWN TO AUSPICIOUS MUHURTHAM */}
            </span>

            <div className="grid grid-cols-4 gap-2 max-w-[280px] mx-auto">
              <div className="bg-[#FAF3E6] p-2 rounded border border-[#C5A15B]/30 text-center">
                <span className="font-cormorant text-lg sm:text-xl font-bold text-[#820A24] block leading-none">
                  {timeLeft.days}
                </span>
                <span className="font-cormorant text-[10px] uppercase font-semibold text-[#483424]">
                  Days
                </span>
              </div>

              <div className="bg-[#FAF3E6] p-2 rounded border border-[#C5A15B]/30 text-center">
                <span className="font-cormorant text-lg sm:text-xl font-bold text-[#820A24] block leading-none">
                  {timeLeft.hours}
                </span>
                <span className="font-cormorant text-[10px] uppercase font-semibold text-[#483424]">
                  Hours
                </span>
              </div>

              <div className="bg-[#FAF3E6] p-2 rounded border border-[#C5A15B]/30 text-center">
                <span className="font-cormorant text-lg sm:text-xl font-bold text-[#820A24] block leading-none">
                  {timeLeft.minutes}
                </span>
                <span className="font-cormorant text-[10px] uppercase font-semibold text-[#483424]">
                  Mins
                </span>
              </div>

              <div className="bg-[#FAF3E6] p-2 rounded border border-[#C5A15B]/30 text-center">
                <span className="font-cormorant text-lg sm:text-xl font-bold text-[#820A24] block leading-none">
                  {timeLeft.seconds}
                </span>
                <span className="font-cormorant text-[10px] uppercase font-semibold text-[#483424]">
                  Secs
                </span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default DetailsSection;
