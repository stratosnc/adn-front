import { getProducts } from '../lib/api';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
        ADN.nc – Catalogue
      </h1>

      <ul style={{ display: 'grid', gap: 12 }}>
        {products.data?.map((product: any) => (
          <li
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: 10,
              padding: 16,
              display: 'flex',
              gap: 14,
              alignItems: 'center',
            }}
          >
            <img
              src={product.base_image?.small_image_url}
              alt={product.name}
              width={72}
              height={72}
              style={{ borderRadius: 8, objectFit: 'cover' }}
            />

            <div>
              <div style={{ fontWeight: 600 }}>{product.name}</div>
              <div style={{ opacity: 0.8, marginTop: 6 }}>
                Prix : {product.min_price}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
