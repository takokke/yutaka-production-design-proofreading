import { KintoneRestAPIClient, KintoneRecordField } from "@kintone/rest-api-client";

// リモートリポジトリ
// https://github.com/takokke/kintone-yutaka-production-design-proofreading
(() => {
    'use strict';
    /* 定数の定義*/

    // 末尾に[縺]を入れる
    /* 関数の定義 */
    const replaceNonJISCharacters = (input: string) => {

        const nonJISRegex = /[^\u0020-\u007E\u00A1-\u00DF\uFF61-\uFF9F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u9FA0\u3000-\u303F\uFF01-\uFF5E\uFF10-\uFF5E]/g;

        // 置き換え文字を定義
        let replacementCharacter = '[縺]';

        return input.replace(nonJISRegex, replacementCharacter);
    }

    // 環境依存文字をチェックする関数
    const containsNonJISCharacters =  (input: string)=>{
        /* 定数の定義*/
        const nonJISRegex = /[^\u0020-\u007E\u00A1-\u00DF\uFF61-\uFF9F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u9FA0\u3000-\u303F\uFF01-\uFF5E\uFF10-\uFF5E]/g;
        
        // \u0020-\u007E: 基本的なASCII文字（空白や記号を含む）
        // \u00A1-\u00DF: 半角カタカナとラテン文字の一部
        // \u3041-\u3093: ひらがな
        // \u30A1-\u30F6: カタカナ
        // \u30FB\: 
        // \u30FC\:「ー」（長音符）
        // \u4E00-\u9FA0: 漢字（CJK統合漢字）
        // \u3000-\u303F: 句読点などの日本語の記号
        // \uFF01: ！
        // \uFF02: "
        // \uFF03: #
        // …
        // \uFF5E: ～（波ダッシュ)
        // \uFF10-\uFF19: 全角の数字（０～９）
        // \uFF21-\uFF3A: 全角のアルファベット（大文字 A～Z）
        // \uFF41-\uFF5A: 全角のアルファベット（小文字 a～z）
        // \uFF5E: ～
        // \uFF61-\uFF9F: 半角カタカナ

       return nonJISRegex.test(input);
    }

    /* 型の定義 */ 
    interface KintoneEvent {
        record: kintone.types.SavedFields;
    }

    // 参考記事
    // https://github.com/kintone/js-sdk/blob/main/packages/rest-api-client/docs/typescript.md
    type ShippingData = {
        $id: KintoneRecordField.ID;
        $revision: KintoneRecordField.Revision;
        更新者: KintoneRecordField.Modifier;
        作成者: KintoneRecordField.Creator;
        レコード番号: KintoneRecordField.RecordNumber;
        更新日時: KintoneRecordField.UpdatedTime;
        作成日時: KintoneRecordField.CreatedTime;
        備考: KintoneRecordField.MultiLineText;
        色指定１: KintoneRecordField.SingleLineText;
        注文商品名: KintoneRecordField.SingleLineText;
        注文番号: KintoneRecordField.SingleLineText;
        色指定3: KintoneRecordField.SingleLineText;
        色指定4: KintoneRecordField.SingleLineText;
        受注明細書番号: KintoneRecordField.SingleLineText;
        色指定2: KintoneRecordField.SingleLineText;
        対応状況: KintoneRecordField.SingleLineText;
        個別色指定1: KintoneRecordField.SingleLineText;
        色指定5: KintoneRecordField.SingleLineText;
        色指定6: KintoneRecordField.SingleLineText;
        納期: KintoneRecordField.SingleLineText;
        個別色備考1: KintoneRecordField.SingleLineText;
        生地区分4: KintoneRecordField.SingleLineText;
        生地区分3: KintoneRecordField.SingleLineText;
        生地区分2: KintoneRecordField.SingleLineText;
        個別色名1: KintoneRecordField.SingleLineText;
        生地区分1: KintoneRecordField.SingleLineText;
        色名2: KintoneRecordField.SingleLineText;
        色名1: KintoneRecordField.SingleLineText;
        校正回数: KintoneRecordField.SingleLineText;
        色名6: KintoneRecordField.SingleLineText;
        色名5: KintoneRecordField.SingleLineText;
        色名4: KintoneRecordField.SingleLineText;
        色名3: KintoneRecordField.SingleLineText;
        生地区分6: KintoneRecordField.SingleLineText;
        生地区分5: KintoneRecordField.SingleLineText;
        会員ID: KintoneRecordField.Number;
        備考6: KintoneRecordField.SingleLineText;
        備考4: KintoneRecordField.SingleLineText;
        備考5: KintoneRecordField.SingleLineText;
        備考2: KintoneRecordField.SingleLineText;
        備考3: KintoneRecordField.SingleLineText;
        校正番号: KintoneRecordField.SingleLineText;
        備考1: KintoneRecordField.SingleLineText;
        校正状況: KintoneRecordField.Dropdown;
        営業所属: KintoneRecordField.SingleLineText;
        入稿データ: KintoneRecordField.RadioButton;
        個別色レコードNO1: KintoneRecordField.Number;
        受注商品番号: KintoneRecordField.SingleLineText;
        個別色補足1: KintoneRecordField.SingleLineText;
        ECCUBEのリンク: KintoneRecordField.Link;
        お客様からの修正内容: KintoneRecordField.MultiLineText;
        色レコードNO2: KintoneRecordField.Number;
        色レコードNO1: KintoneRecordField.Number;
        色レコードNO4: KintoneRecordField.Number;
        色レコードNO3: KintoneRecordField.Number;
        色レコードNO6: KintoneRecordField.Number;
        色レコードNO5: KintoneRecordField.Number;
    
        編集担当者: KintoneRecordField.UserSelect;
        営業担当者: KintoneRecordField.UserSelect;
        のし画像: KintoneRecordField.File;
        その他画像: KintoneRecordField.File;
        刺繍画像: KintoneRecordField.File;
        デザイン画像: KintoneRecordField.File;
        タグ画像: KintoneRecordField.File;
    }

    // レコード詳細画面において、環境依存文字を含むフィールドを黄色にする
    // まずは、全種類のフィールドを取得する必要がある。
    kintone.events.on("app.record.detail.show", (event: KintoneEvent)=> {

      
        try {
            const record = event.record;
            // フィールド名を配列で定義
            const fieldCodes: (keyof kintone.types.SavedFields)[] = [
               'お客様からの修正内容',
               '備考',
               '営業所属',
               '校正回数',
               '注文商品名',
               '納期'
            ];

            fieldCodes.forEach(fieldCode => {
                const fieldValue = record[fieldCode]?.value;
            
                // console.log(`フィールド名: ${fieldCode}, 値: ${fieldValue}, 型: ${typeof fieldValue}`);
            
                if (fieldValue === null || typeof fieldValue !== 'string') {
                    console.log(`${fieldCode} は値がnullまたは文字列ではありません。`);
                    return;
                }
                
                const containsNonJIS = containsNonJISCharacters(fieldValue);
                const containsSpecialChar = fieldValue.includes("[縺]");
            
                //console.log(`フィールド名: ${fieldCode}, Non-JIS: ${containsNonJIS}, 特殊文字: ${containsSpecialChar}`);
            
                if (containsNonJIS || containsSpecialChar) {
                    let fieldElement = kintone.app.record.getFieldElement(fieldCode);
                    if (fieldElement === null) {
                        throw new Error(`フィールド "${fieldCode}" が見つかりません`);
                    }
                    fieldElement.style.backgroundColor = 'yellow';
                }
            });

        } catch (err) {
            if (err instanceof Error) {
                console.error(err);
                alert(err.message);
            } else {
                console.error(err);
                alert("An unknown error occurred");
            }
        }

        


        return event;
    })
    // レコード一覧画面
    // 置き換えボタンを表示
    kintone.events.on("app.record.index.show", (event) => {

        if (document.getElementById('replace_button') !== null) {
          return false;
        }
        const button = document.createElement("button");
        button.id = "replace_button";
        button.innerHTML = '<span></span>環境依存文字を置換する';
        
        button.onclick = async () => {
            // 全レコードを取得

            try {

                document.getElementById("#replace_button")?.classList.add("click");

                button.disabled = true;
                
                const client = new KintoneRestAPIClient({});
                const APP_ID = kintone.app.getId();

                if (APP_ID === null) {
                    throw new Error("アプリIDが取得できませんでした。");
                }

                const getAllRecordsParams = {
                    app: APP_ID,
                };
                
                const getAllRecordsResp = await client.record.getAllRecords<ShippingData>(getAllRecordsParams);
                const nonJISRegex = /[^\u0020-\u007E\u00A1-\u00DF\uFF61-\uFF9F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u9FA0\u3000-\u303F\uFF01-\uFF5E\uFF10-\uFF5E]/g;
                
                const targetRecords = await getAllRecordsResp.filter((record) => {
                    return nonJISRegex.test(record.お客様からの修正内容.value) ||
                        nonJISRegex.test(record.備考.value) || 
                        nonJISRegex.test(record.営業所属.value) || 
                        nonJISRegex.test(record.校正回数.value) ||
                        nonJISRegex.test(record.注文商品名.value) ||
                        nonJISRegex.test(record.納期.value);
                });

                console.log(targetRecords);
                
                let updateRecords: any[] = [];
                
                // 更新する内容を作成
                targetRecords.forEach((record) => {
                    let updateRecord = {
                        id: record.$id.value,
                        record: {
                            お客様からの修正内容: {
                                value: replaceNonJISCharacters(record.お客様からの修正内容.value)
                            },
                            備考: {
                                value: replaceNonJISCharacters(record.備考.value)
                            },
                            営業所属: {
                                value: replaceNonJISCharacters(record.営業所属.value)
                            },
                            校正回数: {
                                value: replaceNonJISCharacters(record.校正回数.value)
                            },
                            注文商品名: {
                                value: replaceNonJISCharacters(record.注文商品名.value)
                            },
                            納期: {
                                value: replaceNonJISCharacters(record.納期.value)
                            },
                        }
                    };
                    updateRecords.push(updateRecord);
                });

                console.log(updateRecords);

                const updateAllRecordsParams = {
                    app: APP_ID,
                    records: updateRecords,
                };
                
                await client.record.updateAllRecords(updateAllRecordsParams);
                
                // ボタン要素を取得
                const replaceButton = document.getElementById("replace_button");

                // クラスを削除
                if (replaceButton) {
                    replaceButton.classList.remove("click");
                    // HTMLを更新
                    replaceButton.innerHTML = "<span></span>環境依存文字を置換する";
                }
                button.disabled = false;
                
                alert("JIS非対応文字の置換が完了しました");

                location.reload();

            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                    alert(err.message);
                } else {
                    console.error(err);
                    alert("An unknown error occurred");
                }
            }
        };
        
        const headerMenuSpace = kintone.app.getHeaderMenuSpaceElement();
        headerMenuSpace?.appendChild(button);
        
        return event;
    });

})();