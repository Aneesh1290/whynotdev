'use client';

import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Briefcase, 
  Users, 
  ChevronDown,
  ArrowUpRight,
  CircleCheck,
  FileText,
  AlertCircle
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardUI({ 
  clients, 
  projects, 
  invoices, 
  activityLogs, 
  deadlines, 
  dailyRevenue 
}: any) {
  
  // Calculate aggregate KPIs
  const totalClients = clients.length;
  const activeProjects = projects.filter((p: any) => p.status === 'Active').length;
  const totalRevenue = clients.reduce((sum: number, c: any) => sum + Number(c.total_revenue), 0);
  const pendingInvoices = invoices.filter((i: any) => i.status !== 'Paid').reduce((sum: number, i: any) => sum + Number(i.amount), 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
      
      {/* Date Range Picker (Right aligned) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '1.03rem', color: '#111', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <CalendarIcon />
          May 12 – Jun 12, 2024
          <ChevronDown size={16} color="#666" />
        </button>
      </div>

      {/* KPI Cards Row (4 Columns) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        <KpiCard 
          title="Total Revenue" 
          value={`₹ ${totalRevenue.toLocaleString()}`} 
          trend="up" 
          trendValue="0% from last month" 
          icon={<TrendingUp size={20} color="#fff" />} 
        />
        <KpiCard 
          title="Pending Payments" 
          value={`₹ ${pendingInvoices.toLocaleString()}`} 
          trend="down" 
          trendValue="0% from last month" 
          icon={<Wallet size={20} color="#fff" />} 
        />
        <KpiCard 
          title="Active Projects" 
          value={activeProjects} 
          trend="up" 
          trendValue="0 from last month" 
          icon={<Briefcase size={20} color="#fff" />} 
        />
        <KpiCard 
          title="Total Clients" 
          value={totalClients} 
          trend="up" 
          trendValue="0 from last month" 
          icon={<Users size={20} color="#fff" />} 
        />
      </div>

      {/* Second Row (Chart + Lists) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1.1fr)', gap: '24px' }}>
        
        {/* Revenue Overview Chart */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.32rem', fontWeight: 600, color: '#111' }}>Revenue Overview</h3>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #eee', padding: '6px 12px', borderRadius: '6px', backgroundColor: '#f9f9f9', fontSize: '0.98rem', cursor: 'pointer' }}>
              This Month <ChevronDown size={14} />
            </button>
          </div>
          
          <div style={{ flex: 1, minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {dailyRevenue.length === 0 ? (
              <p style={{ color: '#888', fontSize: '0.9rem' }}>No revenue data available.</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyRevenue} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#111" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#111" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date_label" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} tickFormatter={(value) => `₹ ${value / 1000}K`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderRadius: '8px', border: 'none', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{ stroke: '#ccc', strokeWidth: 1, strokeDasharray: '4 4' }}
                  />
                  <Area type="monotone" dataKey="total" stroke="#111" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" activeDot={{ r: 6, fill: '#111', stroke: '#fff', strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.26rem', fontWeight: 600, color: '#111' }}>Recent Activity</h3>
            <span style={{ fontSize: '0.98rem', color: '#666', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View All <ArrowUpRight size={14} />
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {activityLogs.length === 0 ? (
              <p style={{ color: '#888', fontSize: '0.9rem', textAlign: 'center', padding: '20px 0' }}>No recent activity.</p>
            ) : (
              activityLogs.map((log: any) => (
                <ActivityItem 
                  key={log.id} 
                  icon={
                    log.type === 'payment' ? <CircleCheck size={20} color="#22c55e" /> : 
                    log.type === 'alert' ? <AlertCircle size={20} color="#ef4444" /> : 
                    <FileText size={20} color="#3b82f6" />
                  } 
                  iconBg={
                    log.type === 'payment' ? '#dcfce7' : 
                    log.type === 'alert' ? '#fee2e2' : 
                    '#dbeafe'
                  } 
                  title={log.title} 
                  desc={log.description} 
                  time={log.time_ago} 
                />
              ))
            )}
          </div>
        </div>

        {/* Projects Overview */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.32rem', fontWeight: 600, color: '#111' }}>Projects Overview</h3>
            <span style={{ fontSize: '0.98rem', color: '#666', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View All <ArrowUpRight size={14} />
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {projects.length === 0 ? (
              <p style={{ color: '#888', fontSize: '0.9rem', textAlign: 'center', padding: '20px 0' }}>No active projects.</p>
            ) : (
              projects.map((project: any) => (
                <ProjectItem key={project.id} name={project.name} progress={project.progress} timeRemaining={project.time_remaining || 'N/A'} status={project.status} />
              ))
            )}
          </div>
        </div>

      </div>

      {/* Third Row (Deadlines, Invoices, Top Clients) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr) minmax(0, 1fr)', gap: '24px' }}>
        
        {/* Upcoming Deadlines */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.32rem', fontWeight: 600, color: '#111' }}>Upcoming Deadlines</h3>
            <span style={{ fontSize: '0.98rem', color: '#666', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View Calendar <ArrowUpRight size={14} />
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {deadlines.length === 0 ? (
               <p style={{ color: '#888', fontSize: '0.9rem', textAlign: 'center', padding: '20px 0' }}>No upcoming deadlines.</p>
            ) : (
              deadlines.map((deadline: any) => (
                <DeadlineItem key={deadline.id} month={deadline.month} day={deadline.day} title={deadline.title} desc={deadline.description} label={deadline.label} />
              ))
            )}
          </div>
        </div>

        {/* Pending Invoices */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.26rem', fontWeight: 600, color: '#111' }}>Pending Invoices</h3>
            <span style={{ fontSize: '0.98rem', color: '#666', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View All <ArrowUpRight size={14} />
            </span>
          </div>
          {invoices.length === 0 ? (
             <p style={{ color: '#888', fontSize: '0.9rem', textAlign: 'center', padding: '40px 0' }}>No pending invoices.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #eee', color: '#888', fontSize: '0.98rem', textAlign: 'left' }}>
                  <th style={{ paddingBottom: '16px', fontWeight: 500 }}>Invoice</th>
                  <th style={{ paddingBottom: '16px', fontWeight: 500 }}>Client</th>
                  <th style={{ paddingBottom: '16px', fontWeight: 500 }}>Amount</th>
                  <th style={{ paddingBottom: '16px', fontWeight: 500 }}>Due Date</th>
                  <th style={{ paddingBottom: '16px', fontWeight: 500 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice: any) => (
                  <InvoiceRow key={invoice.id} id={invoice.id} client={invoice.client_name} amount={`₹ ${Number(invoice.amount).toLocaleString()}`} date={invoice.due_date} status={invoice.status} />
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Top Clients */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.26rem', fontWeight: 600, color: '#111' }}>Top Clients</h3>
            <span style={{ fontSize: '0.98rem', color: '#666', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View All <ArrowUpRight size={14} />
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {clients.length === 0 ? (
              <p style={{ color: '#888', fontSize: '0.9rem', textAlign: 'center', padding: '20px 0' }}>No clients found.</p>
            ) : (
              clients.map((client: any) => (
                <ClientItem key={client.id} initials={client.initials} name={client.name} subtitle={`${client.project_count} Projects`} amount={`₹ ${Number(client.total_revenue).toLocaleString()}`} />
              ))
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

// ---------------- Helper Components ----------------

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function KpiCard({ title, value, trend, trendValue, icon }: any) {
  const isUp = trend === 'up';
  return (
    <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ fontSize: '0.9rem', color: '#444', fontWeight: 500, marginBottom: '8px', whiteSpace: 'nowrap' }}>{title}</h4>
        <span style={{ fontSize: '1.8rem', fontWeight: 600, color: '#111', marginBottom: '12px', letterSpacing: '-0.5px', lineHeight: 1.1, whiteSpace: 'nowrap' }}>{value}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#666', whiteSpace: 'nowrap' }}>
          <span style={{ color: isUp ? '#22c55e' : '#ef4444', display: 'flex', alignItems: 'center' }}>
            {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          </span>
          {trendValue}
        </div>
      </div>
      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#111', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
        {icon}
      </div>
    </div>
  );
}

function ActivityItem({ icon, iconBg, title, desc, time }: any) {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: iconBg, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <h5 style={{ fontSize: '1.03rem', fontWeight: 500, color: '#111', marginBottom: '2px' }}>{title}</h5>
        <p style={{ fontSize: '0.92rem', color: '#666' }}>{desc}</p>
      </div>
      <span style={{ fontSize: '0.86rem', color: '#888' }}>{time}</span>
    </div>
  );
}

function ProjectItem({ name, progress, timeRemaining, status }: any) {
  const isCompleted = status === 'Completed';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.03rem', fontWeight: 500, color: '#111' }}>{name}</span>
        <span style={{ fontSize: '0.86rem', padding: '4px 8px', borderRadius: '4px', backgroundColor: isCompleted ? '#dcfce7' : '#f5f5f5', color: isCompleted ? '#16a34a' : '#444', fontWeight: 500 }}>
          {status}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontSize: '0.86rem', color: '#666', width: '32px' }}>{progress}%</span>
        <div style={{ flex: 1, height: '6px', backgroundColor: '#eee', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#111', borderRadius: '3px' }}></div>
        </div>
        <span style={{ fontSize: '0.86rem', color: '#666', width: '70px', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
          {timeRemaining !== 'Completed' && <CalendarIcon />}
          {timeRemaining}
        </span>
      </div>
    </div>
  );
}

function DeadlineItem({ month, day, title, desc, label }: any) {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '8px', border: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', lineHeight: 1 }}>{month}</span>
        <span style={{ fontSize: '1.26rem', fontWeight: 700, color: '#111', lineHeight: 1, marginTop: '2px' }}>{day}</span>
      </div>
      <div style={{ flex: 1 }}>
        <h5 style={{ fontSize: '1.03rem', fontWeight: 500, color: '#111', marginBottom: '2px' }}>{title}</h5>
        <p style={{ fontSize: '0.92rem', color: '#666' }}>{desc}</p>
      </div>
      <span style={{ fontSize: '0.86rem', padding: '6px 10px', borderRadius: '6px', backgroundColor: '#f9f9f9', color: '#444', border: '1px solid #eee', fontWeight: 500 }}>
        {label}
      </span>
    </div>
  );
}

function InvoiceRow({ id, client, amount, date, status }: any) {
  let statusBg = '#f5f5f5';
  let statusColor = '#444';
  
  if (status === 'Overdue') {
    statusBg = '#fee2e2';
    statusColor = '#dc2626';
  } else if (status === 'Due Soon') {
    statusBg = '#fef3c7';
    statusColor = '#d97706';
  } else if (status === 'Pending') {
    statusBg = '#e0e7ff';
    statusColor = '#4f46e5';
  }

  return (
    <tr style={{ borderBottom: '1px solid #f5f5f5' }}>
      <td style={{ padding: '16px 0', fontSize: '1.03rem', fontWeight: 500, color: '#111' }}>{id}</td>
      <td style={{ padding: '16px 0', fontSize: '1.03rem', color: '#444' }}>{client}</td>
      <td style={{ padding: '16px 0', fontSize: '1.03rem', color: '#111', fontWeight: 500 }}>{amount}</td>
      <td style={{ padding: '16px 0', fontSize: '1.03rem', color: '#666' }}>{date}</td>
      <td style={{ padding: '16px 0' }}>
        <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: statusBg, color: statusColor, fontSize: '0.86rem', fontWeight: 500 }}>
          {status}
        </span>
      </td>
    </tr>
  );
}

function ClientItem({ initials, name, subtitle, amount }: any) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#111', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 600, fontSize: '1.26rem' }}>
          {initials}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '1.03rem', fontWeight: 500, color: '#111' }}>{name}</span>
          <span style={{ fontSize: '0.86rem', color: '#666' }}>{subtitle}</span>
        </div>
      </div>
      <span style={{ fontSize: '1.09rem', fontWeight: 600, color: '#111' }}>{amount}</span>
    </div>
  );
}
