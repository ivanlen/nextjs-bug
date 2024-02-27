// pages/tokens.js
import prisma from '../lib/prisma';

export async function getServerSideProps() {
  const tokens = await prisma.token.findMany();
  return {
    props: {
      tokens,
    },
  };
}

const TokensPage = ({ tokens }) => {
  return (
    <div>
      <h1>Tokens</h1>
      <ul>
        {tokens.map((token) => (
          <li key={token.id}>
            {token.tokenId}: {token.tokenName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokensPage;
