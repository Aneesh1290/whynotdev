import { createClient } from '@/utils/supabase/server';
import DashboardUI from '@/components/DashboardUI';

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch all dashboard data concurrently
  const [
    { data: clients },
    { data: projects },
    { data: invoices },
    { data: activityLogs },
    { data: deadlines },
    { data: dailyRevenue }
  ] = await Promise.all([
    supabase.from('clients').select('*').order('created_at', { ascending: false }),
    supabase.from('projects').select('*').order('created_at', { ascending: false }),
    supabase.from('invoices').select('*').order('due_date', { ascending: true }),
    supabase.from('activity_logs').select('*').order('created_at', { ascending: false }),
    supabase.from('deadlines').select('*').order('created_at', { ascending: true }),
    supabase.from('daily_revenue').select('*').order('id', { ascending: true }) // Assuming id defines order for daily revenue
  ]);

  return (
    <DashboardUI 
      clients={clients || []}
      projects={projects || []}
      invoices={invoices || []}
      activityLogs={activityLogs || []}
      deadlines={deadlines || []}
      dailyRevenue={dailyRevenue || []}
    />
  );
}
