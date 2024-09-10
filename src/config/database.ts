import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://ads_il6i_user:HGEkdCzPpG9mvAgdxJttFTqH0ryAlrlh@dpg-cr75terqf0us73fbud1g-a.oregon-postgres.render.com/ads_il6i';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;