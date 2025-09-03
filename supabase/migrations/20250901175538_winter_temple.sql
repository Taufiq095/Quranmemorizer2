-- Add foreign key constraint for progress.user_id -> profiles.id
-- Add composite primary key for progress table

ALTER TABLE progress 
ADD CONSTRAINT fk_progress_user_id 
FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

-- Drop existing primary key if it exists and add composite primary key
ALTER TABLE progress DROP CONSTRAINT IF EXISTS progress_pkey;
ALTER TABLE progress ADD PRIMARY KEY (user_id, surah_id);