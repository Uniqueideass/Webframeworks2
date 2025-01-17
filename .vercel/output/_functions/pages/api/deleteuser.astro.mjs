import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
export { renderers } from '../../renderers.mjs';

const prerender = false;
config();
const supabaseUrl = "https://mmcbxaqrhxfrbzzuefun.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
console.log(supabaseServiceKey);
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
async function deleteUser(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const { userId } = req.body;
  try {
    const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);
    if (error) {
      throw error;
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: deleteUser,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
