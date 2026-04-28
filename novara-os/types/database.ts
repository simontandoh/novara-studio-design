export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      checklist_items: {
        Row: {
          completed: boolean;
          completed_at: string | null;
          id: string;
          label: string;
          order_index: number;
          project_id: string;
        };
        Insert: {
          completed?: boolean;
          completed_at?: string | null;
          id?: string;
          label: string;
          order_index: number;
          project_id: string;
        };
        Update: {
          completed?: boolean;
          completed_at?: string | null;
          id?: string;
          label?: string;
          order_index?: number;
          project_id?: string;
        };
      };
      clients: {
        Row: {
          business_name: string;
          contact_name: string;
          created_at: string;
          email: string;
          id: string;
          industry: string;
          location: string | null;
          notes: string | null;
          phone: string | null;
          status: Database["public"]["Enums"]["client_status"];
          updated_at: string;
        };
        Insert: {
          business_name: string;
          contact_name: string;
          created_at?: string;
          email: string;
          id?: string;
          industry: string;
          location?: string | null;
          notes?: string | null;
          phone?: string | null;
          status?: Database["public"]["Enums"]["client_status"];
          updated_at?: string;
        };
        Update: {
          business_name?: string;
          contact_name?: string;
          created_at?: string;
          email?: string;
          id?: string;
          industry?: string;
          location?: string | null;
          notes?: string | null;
          phone?: string | null;
          status?: Database["public"]["Enums"]["client_status"];
          updated_at?: string;
        };
      };
      components: {
        Row: {
          category: string;
          created_at: string;
          example_copy: string;
          id: string;
          name: string;
          purpose: string;
          recommended_usage: string;
        };
        Insert: {
          category: string;
          created_at?: string;
          example_copy: string;
          id?: string;
          name: string;
          purpose: string;
          recommended_usage: string;
        };
        Update: {
          category?: string;
          created_at?: string;
          example_copy?: string;
          id?: string;
          name?: string;
          purpose?: string;
          recommended_usage?: string;
        };
      };
      generated_builds: {
        Row: {
          brief_markdown: string;
          claude_prompt: string;
          colour_direction: string | null;
          created_at: string;
          cta_text: string | null;
          cursor_prompt: string;
          hero_headline: string | null;
          hero_subheadline: string | null;
          id: string;
          project_id: string;
          proposal_text: string;
          seo_meta: string | null;
          seo_title: string | null;
          sitemap: Json;
          typography_direction: string | null;
        };
        Insert: {
          brief_markdown: string;
          claude_prompt: string;
          colour_direction?: string | null;
          created_at?: string;
          cta_text?: string | null;
          cursor_prompt: string;
          hero_headline?: string | null;
          hero_subheadline?: string | null;
          id?: string;
          project_id: string;
          proposal_text: string;
          seo_meta?: string | null;
          seo_title?: string | null;
          sitemap?: Json;
          typography_direction?: string | null;
        };
        Update: {
          brief_markdown?: string;
          claude_prompt?: string;
          colour_direction?: string | null;
          created_at?: string;
          cta_text?: string | null;
          cursor_prompt?: string;
          hero_headline?: string | null;
          hero_subheadline?: string | null;
          id?: string;
          project_id?: string;
          proposal_text?: string;
          seo_meta?: string | null;
          seo_title?: string | null;
          sitemap?: Json;
          typography_direction?: string | null;
        };
      };
      projects: {
        Row: {
          client_id: string;
          created_at: string;
          id: string;
          intake_id: string | null;
          name: string;
          status: Database["public"]["Enums"]["project_status"];
          template_id: string | null;
          updated_at: string;
        };
        Insert: {
          client_id: string;
          created_at?: string;
          id?: string;
          intake_id?: string | null;
          name: string;
          status?: Database["public"]["Enums"]["project_status"];
          template_id?: string | null;
          updated_at?: string;
        };
        Update: {
          client_id?: string;
          created_at?: string;
          id?: string;
          intake_id?: string | null;
          name?: string;
          status?: Database["public"]["Enums"]["project_status"];
          template_id?: string | null;
          updated_at?: string;
        };
      };
      templates: {
        Row: {
          created_at: string;
          cta_style: string;
          id: string;
          industry: string;
          name: string;
          recommended_pages: string[];
          recommended_sections: string[];
          tone: string;
        };
        Insert: {
          created_at?: string;
          cta_style: string;
          id?: string;
          industry: string;
          name: string;
          recommended_pages?: string[];
          recommended_sections?: string[];
          tone: string;
        };
        Update: {
          created_at?: string;
          cta_style?: string;
          id?: string;
          industry?: string;
          name?: string;
          recommended_pages?: string[];
          recommended_sections?: string[];
          tone?: string;
        };
      };
      website_intakes: {
        Row: {
          automation_needs: string | null;
          brand_tone: string | null;
          business_name: string;
          client_id: string;
          competitors: string[];
          created_at: string;
          existing_website: string | null;
          id: string;
          industry: string;
          location: string | null;
          main_service: string;
          notes: string | null;
          pages_needed: string[];
          preferred_colours: string | null;
          primary_goal: Database["public"]["Enums"]["primary_goal"];
          secondary_services: string[];
          target_customer: string;
        };
        Insert: {
          automation_needs?: string | null;
          brand_tone?: string | null;
          business_name: string;
          client_id: string;
          competitors?: string[];
          created_at?: string;
          existing_website?: string | null;
          id?: string;
          industry: string;
          location?: string | null;
          main_service: string;
          notes?: string | null;
          pages_needed?: string[];
          preferred_colours?: string | null;
          primary_goal: Database["public"]["Enums"]["primary_goal"];
          secondary_services?: string[];
          target_customer: string;
        };
        Update: {
          automation_needs?: string | null;
          brand_tone?: string | null;
          business_name?: string;
          client_id?: string;
          competitors?: string[];
          created_at?: string;
          existing_website?: string | null;
          id?: string;
          industry?: string;
          location?: string | null;
          main_service?: string;
          notes?: string | null;
          pages_needed?: string[];
          preferred_colours?: string | null;
          primary_goal?: Database["public"]["Enums"]["primary_goal"];
          secondary_services?: string[];
          target_customer?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      client_status: "lead" | "active" | "paused" | "completed";
      primary_goal: "calls" | "bookings" | "enquiries" | "sales";
      project_status: "draft" | "in_progress" | "review" | "live";
    };
    CompositeTypes: Record<string, never>;
  };
};
