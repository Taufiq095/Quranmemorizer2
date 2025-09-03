export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          display_name: string | null;
          age: number | null;
          gender: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          display_name?: string | null;
          age?: number | null;
          gender?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          display_name?: string | null;
          age?: number | null;
          gender?: string | null;
          created_at?: string;
        };
      };
      progress: {
        Row: {
          user_id: string;
          surah_id: string;
          last_ayah: number;
          xp: number;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          surah_id: string;
          last_ayah?: number;
          xp?: number;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          surah_id?: string;
          last_ayah?: number;
          xp?: number;
          updated_at?: string;
        };
      };
    };
  };
}