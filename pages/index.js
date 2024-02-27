// pages/index.js
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div>
      <h1>Welcome to Next.js with Prisma!</h1>
      <Link href="/tokens">View Tokens</Link>
      <br />
      <Link href="/addToken">Add Token</Link>
    </div>
  );
};

export default IndexPage;
