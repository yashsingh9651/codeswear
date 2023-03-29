import { useRouter } from 'next/router';
import React from 'react';
const slug = () => {
  const router = useRouter();
  const {slug} = router.query;
  return (
    <div>Product:{slug}</div>
  )
}
export default slug;