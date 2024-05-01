import { css } from '../../../../styled-system/css';


export default function Home({ params }: { params: { nominal: string } }) {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: 'bold', background: "green" })}>Hello 🐼! {params.nominal}</div>
  );
}
