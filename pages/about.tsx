import Container from "@/components/container";
import PostBody from "@/components/post-body";
import Contact from "@/components/contact";
import Hero from '@/components/hero'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column";
import Image from "next/image";
import eyeCatch from 'images/about.jpg'

export default function About() {
    return (
        <Container>
            <Hero
                title="About"
                subtitle="About development activities"
            />

            <figure>
                <Image
                    src={eyeCatch}
                    alt=""
                    layout="responsive"
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    priority
                    placeholder="blur"
                />
            </figure>

            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <p>cssの説明しまっせ〜</p>

                        <h2>justify-items</h2>

                        <p>このプロパティの効果は、現在のレイアウトモードに依存します。</p>

                        <p>ブロックレベルレイアウトでは、包含ブロック内のアイテムをインライン軸で配置します。</p>

                        <p>絶対位置指定の要素では、 top, left, bottom, right の各オフセット値を反映して、包含ブロック内のアイテムをインライン軸で配置します。</p>

                        <h2>justify-items</h2>

                        <p>表のセルレイアウトでは、このプロパティは無視されます (絶対配置及び表レイアウトのブロック内の配置についてはこちら)</p>

                        <p>フレックスボックスレイアウトでは、このプロパティは無視されます (フレックスボックス内での配置についてはこちら)</p>

                        <p>グリッドレイアウトでは、グリッド領域内のアイテムをインライン軸に配置します (グリッドレイアウト内での配置についてはこちら)</p>

                        <p>グリッドレイアウトでは、グリッド領域内のアイテムをインライン軸に配置します (グリッドレイアウト内での配置についてはこちら)</p>

                        <p>グリッドレイアウトでは、グリッド領域内のアイテムをインライン軸に配置します (グリッドレイアウト内での配置についてはこちら)</p>

                        <p>グリッドレイアウトでは、グリッド領域内のアイテムをインライン軸に配置します (グリッドレイアウト内での配置についてはこちら)</p>
                    </PostBody>
                </TwoColumnMain>
                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container >
    )
}