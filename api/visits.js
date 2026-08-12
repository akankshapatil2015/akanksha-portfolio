import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY,
);

export default async function handler(req, res) {
  try {
    // Get current visitor count
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('portfolio_stats')
        .select('visits')
        .eq('id', 1)
        .single();

      if (error) {
        throw error;
      }

      return res.status(200).json({
        count: data.visits,
      });
    }

    // Record a new visit
    if (req.method === 'POST') {
      const { data, error } = await supabase.rpc('increment_portfolio_visits');

      if (error) {
        throw error;
      }

      return res.status(200).json({
        count: data,
      });
    }

    return res.status(405).json({
      error: 'Method not allowed',
    });
  } catch (error) {
    console.error('Visitor counter error:', error);

    return res.status(500).json({
      error: 'Failed to process visitor count',
    });
  }
}
