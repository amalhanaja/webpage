"use client"
import {useEffect} from "react";

export const CodeHighlighting = () => {
    useEffect(() => {
        const codes = document.querySelectorAll('code');
        const worker = new Worker('/highlight-code.js');
        codes.forEach((code, index) => {
            worker.postMessage({code: code.textContent, index})
        })
        worker.onmessage = (event) => {
            codes.item(event.data.index).innerHTML = event.data.innerHTML
            console.log("onmessage", codes.item(event.data.index))
        }
    }, [])
    return <></>
}