-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  subscription_tier TEXT DEFAULT 'free',
  subscription_status TEXT DEFAULT 'inactive',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create videos table for user-generated content
CREATE TABLE public.videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  script TEXT NOT NULL,
  avatar_id TEXT,
  video_url TEXT,
  thumbnail_url TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create avatars table for avatar management
CREATE TABLE public.avatars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  image_url TEXT NOT NULL,
  type TEXT DEFAULT 'default', -- 'default' or 'custom'
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE, -- null for default avatars
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.avatars ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- RLS Policies for videos
CREATE POLICY "Users can view own videos" 
ON public.videos FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own videos" 
ON public.videos FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own videos" 
ON public.videos FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own videos" 
ON public.videos FOR DELETE 
USING (auth.uid() = user_id);

-- RLS Policies for avatars
CREATE POLICY "Everyone can view default avatars" 
ON public.avatars FOR SELECT 
USING (type = 'default' OR auth.uid() = user_id);

CREATE POLICY "Users can create custom avatars" 
ON public.avatars FOR INSERT 
WITH CHECK (auth.uid() = user_id AND type = 'custom');

CREATE POLICY "Users can update own custom avatars" 
ON public.avatars FOR UPDATE 
USING (auth.uid() = user_id AND type = 'custom');

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert default avatars
INSERT INTO public.avatars (name, image_url, type) VALUES
('Business Professional', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', 'default'),
('Marketing Expert', 'https://images.unsplash.com/photo-1494790108755-2616b612b330?w=400', 'default'),
('Tech Specialist', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', 'default'),
('Creative Director', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', 'default'),
('Sales Manager', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', 'default');