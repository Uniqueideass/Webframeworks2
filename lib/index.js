export async function getUser() {
    try {
      const { data, error } = await supabase.auth.getUser();
  
      if (error) {
        console.error("Error retrieving user session:", error.message);
        return null;
      }
      console.log(data?.user);
      return data.user;
    } catch (err) {
      console.error("Error retrieving session:", err.message);
      return null;
    }
  }