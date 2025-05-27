const calendarData = {
  month: 'October',
  year: 2021,
  days: [
    { day: 26, isCurrentMonth: false, isToday: false, appointments: [] },
    { day: 27, isCurrentMonth: false, isToday: false, appointments: [] },
    { day: 28, isCurrentMonth: false, isToday: false, appointments: [] },
    { day: 29, isCurrentMonth: false, isToday: false, appointments: [] },
    { day: 30, isCurrentMonth: false, isToday: false, appointments: [] },
    { day: 1, isCurrentMonth: true, isToday: false, appointments: [] },
    { day: 2, isCurrentMonth: true, isToday: false, appointments: [] },
    // ... more days
    { day: 12, isCurrentMonth: true, isToday: true, appointments: [
      { time: '09:00' },
      { time: '13:00' }
    ]},
    // ... more days
  ],
  upcomingAppointments: [
    {
      time: '09:00 AM',
      title: 'Dentist',
      person: 'Dr. Michael Chen'
    },
    {
      time: '02:30 PM',
      title: 'Physiotherapy Appointment',
      person: 'Dr. Emily Wilson'
    }
  ]
};

export default calendarData;