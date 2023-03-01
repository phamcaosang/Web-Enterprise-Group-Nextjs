import { Button } from 'antd'
import React from 'react'
import dynamic from "next/dynamic";

export default function Index() {
    const Editor = dynamic(() => import("./Editor"), { ssr: false });
    return (
        <div>
            <div style={{ textAlign: "right", marginBottom: 30 }}>
                <Button type='primary'>SAVE CHANGES</Button>
            </div>
            <Editor
                value={"Foo"}
                onChange={(v) => console.log(v)}
            />

        </div>
    )
}
