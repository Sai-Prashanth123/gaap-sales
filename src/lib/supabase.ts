import { createClient } from '@supabase/supabase-js'

// Generated database types
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      gaap_users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Direct Supabase configuration
const supabaseUrl = 'https://ulrvgfvnysfqjykwfvfm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscnZnZnZueXNmcWp5a3dmdmZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMjYyMjYsImV4cCI6MjA2MzYwMjIyNn0.4UELfVEzDLR1iWk3b4386Ng53N49LFbfGiY3FwfGWYk'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Convenient type exports for the gaap_users table
export type GaapUser = Database['public']['Tables']['gaap_users']['Row']
export type GaapUserInsert = Database['public']['Tables']['gaap_users']['Insert']
export type GaapUserUpdate = Database['public']['Tables']['gaap_users']['Update'] 