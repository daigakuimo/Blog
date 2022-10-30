import Container from "@/components/container";
import Hero from '@/components/hero'

export default function About() {
    return (
        <Container>
            <Hero
                title="About"
                subtitle="About development activities"
            />

            <h2>justify-items</h2>
            <p>このプロパティの効果は、現在のレイアウトモードに依存します。</p>

            <p>ブロックレベルレイアウトでは、包含ブロック内のアイテムをインライン軸で配置します。</p>

            <p>絶対位置指定の要素では、 top, left, bottom, right の各オフセット値を反映して、包含ブロック内のアイテムをインライン軸で配置します。</p>

            <p>表のセルレイアウトでは、このプロパティは無視されます (絶対配置及び表レイアウトのブロック内の配置についてはこちら)</p>

            <p>フレックスボックスレイアウトでは、このプロパティは無視されます (フレックスボックス内での配置についてはこちら)</p>

            <p>グリッドレイアウトでは、グリッド領域内のアイテムをインライン軸に配置します (グリッドレイアウト内での配置についてはこちら)</p>
        </Container >
    )
}