import { eventConfig } from "@/config/event";

/**
 * Parses eventConfig date & time in Asia/Kolkata (+05:30) and calculates start & end Date objects.
 */
export function getEventDateRange(): { startDate: Date; endDate: Date } {
  // Parse date: e.g. "Wednesday, October 14, 2026" -> extract month, day, year
  const dateStr = eventConfig.baptism.date;
  const timeStr = eventConfig.baptism.time;
  const durationMinutes = eventConfig.calendar.durationMinutes || 120;

  // Extract clean date string: "October 14, 2026"
  const cleanDateStr = dateStr.replace(/^[A-Za-z]+,\s*/, "");
  
  // Parse time: "5:00 PM"
  const timeMatch = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  let hours = 17;
  let minutes = 0;

  if (timeMatch) {
    hours = parseInt(timeMatch[1], 10);
    minutes = parseInt(timeMatch[2], 10);
    const period = timeMatch[3].toUpperCase();
    if (period === "PM" && hours < 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
  }

  // Parse Month name and day
  const months: Record<string, number> = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  };

  const parts = cleanDateStr.split(/\s+/);
  const monthName = parts[0]?.toLowerCase();
  const month = months[monthName] ?? 9; // Default October
  const day = parseInt(parts[1]?.replace(/,/g, "") || "14", 10);
  const year = parseInt(parts[2] || "2026", 10);

  // Note: Asia/Kolkata is fixed at UTC+05:30 (no Daylight Saving Time)
  // UTC time = Local time - 5 hours 30 minutes
  const startUtcTimestamp = Date.UTC(year, month, day, hours - 5, minutes - 30, 0);
  const startDate = new Date(startUtcTimestamp);
  const endDate = new Date(startUtcTimestamp + durationMinutes * 60 * 1000);

  return { startDate, endDate };
}

/**
 * Formats a Date object to iCalendar UTC format (YYYYMMDDTHHmmssZ).
 */
function formatUtcForCalendar(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1);
  const day = pad(date.getUTCDate());
  const hours = pad(date.getUTCHours());
  const minutes = pad(date.getUTCMinutes());
  const seconds = pad(date.getUTCSeconds());
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

/**
 * Generates the Google Calendar web event URL.
 */
export function getGoogleCalendarUrl(): string {
  const { startDate, endDate } = getEventDateRange();
  const startIso = formatUtcForCalendar(startDate);
  const endIso = formatUtcForCalendar(endDate);

  const title = eventConfig.calendar.title;
  const details = eventConfig.calendar.description;
  const location = `${eventConfig.baptism.churchName}, ${eventConfig.baptism.churchAddress}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${startIso}/${endIso}`,
    details: details,
    location: location,
    ctz: eventConfig.baptism.timezone || "Asia/Kolkata",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates RFC 5545 compliant iCalendar (.ics) content.
 */
export function generateIcsContent(): string {
  const { startDate, endDate } = getEventDateRange();
  const startIso = formatUtcForCalendar(startDate);
  const endIso = formatUtcForCalendar(endDate);
  const nowIso = formatUtcForCalendar(new Date());

  const title = eventConfig.calendar.title.replace(/[,;]/g, " ");
  const description = eventConfig.calendar.description.replace(/\n/g, "\\n");
  const location = `${eventConfig.baptism.churchName}, ${eventConfig.baptism.churchAddress}`.replace(/[,;]/g, " ");
  const uid = `baptism-${eventConfig.baby.childName.toLowerCase().replace(/[^a-z0-9]/g, "")}-${startDate.getTime()}@invitation`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Baptism Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${nowIso}`,
    `DTSTART:${startIso}`,
    `DTEND:${endIso}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "TRANSP:OPAQUE",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/**
 * Triggers a browser download of the .ics file.
 */
export function downloadIcsFile(): void {
  const icsData = generateIcsContent();
  const fileName = `baptism-${eventConfig.baby.childName.toLowerCase().replace(/\s+/g, "-")}.ics`;

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
