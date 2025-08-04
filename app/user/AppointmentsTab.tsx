import React from 'react';

const sampleAppointments = [
  { id: '1', date: '2024-07-05', time: '10:00', with: 'Nguyễn Văn B', note: 'Xem nhà Quận 7' },
  { id: '2', date: '2024-07-10', time: '14:00', with: 'Trần Thị C', note: 'Tư vấn mua căn hộ' },
];

const AppointmentsTab = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Lịch hẹn</h2>
      <ul>
        {sampleAppointments.map(app => (
          <li key={app.id} className="mb-4 border-b pb-2">
            <div className="font-semibold">{app.note}</div>
            <div className="text-gray-500 text-sm">Ngày: {app.date} - Giờ: {app.time}</div>
            <div className="text-gray-500 text-sm">Với: {app.with}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsTab; 