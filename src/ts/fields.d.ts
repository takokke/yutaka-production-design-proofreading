declare namespace kintone.types {
  interface Fields {
    備考: kintone.fieldTypes.MultiLineText;
    色指定１: kintone.fieldTypes.SingleLineText;
    注文商品名: kintone.fieldTypes.SingleLineText;
    注文番号: kintone.fieldTypes.SingleLineText;
    色指定3: kintone.fieldTypes.SingleLineText;
    色指定4: kintone.fieldTypes.SingleLineText;
    受注明細書番号: kintone.fieldTypes.SingleLineText;
    色指定2: kintone.fieldTypes.SingleLineText;
    対応状況: kintone.fieldTypes.SingleLineText;
    個別色指定1: kintone.fieldTypes.SingleLineText;
    色指定5: kintone.fieldTypes.SingleLineText;
    色指定6: kintone.fieldTypes.SingleLineText;
    納期: kintone.fieldTypes.SingleLineText;
    個別色備考1: kintone.fieldTypes.SingleLineText;
    生地区分4: kintone.fieldTypes.SingleLineText;
    生地区分3: kintone.fieldTypes.SingleLineText;
    生地区分2: kintone.fieldTypes.SingleLineText;
    個別色名1: kintone.fieldTypes.SingleLineText;
    生地区分1: kintone.fieldTypes.SingleLineText;
    色名2: kintone.fieldTypes.SingleLineText;
    色名1: kintone.fieldTypes.SingleLineText;
    校正回数: kintone.fieldTypes.SingleLineText;
    色名6: kintone.fieldTypes.SingleLineText;
    色名5: kintone.fieldTypes.SingleLineText;
    色名4: kintone.fieldTypes.SingleLineText;
    色名3: kintone.fieldTypes.SingleLineText;
    生地区分6: kintone.fieldTypes.SingleLineText;
    生地区分5: kintone.fieldTypes.SingleLineText;
    会員ID: kintone.fieldTypes.Number;
    備考6: kintone.fieldTypes.SingleLineText;
    備考4: kintone.fieldTypes.SingleLineText;
    備考5: kintone.fieldTypes.SingleLineText;
    備考2: kintone.fieldTypes.SingleLineText;
    備考3: kintone.fieldTypes.SingleLineText;
    校正番号: kintone.fieldTypes.SingleLineText;
    備考1: kintone.fieldTypes.SingleLineText;
    校正状況: kintone.fieldTypes.DropDown;
    営業所属: kintone.fieldTypes.SingleLineText;
    入稿データ: kintone.fieldTypes.RadioButton;
    個別色レコードNO1: kintone.fieldTypes.Number;
    受注商品番号: kintone.fieldTypes.SingleLineText;
    個別色補足1: kintone.fieldTypes.SingleLineText;
    ECCUBEのリンク: kintone.fieldTypes.Link;
    お客様からの修正内容: kintone.fieldTypes.MultiLineText;
    色レコードNO2: kintone.fieldTypes.Number;
    色レコードNO1: kintone.fieldTypes.Number;
    色レコードNO4: kintone.fieldTypes.Number;
    色レコードNO3: kintone.fieldTypes.Number;
    色レコードNO6: kintone.fieldTypes.Number;
    色レコードNO5: kintone.fieldTypes.Number;

    編集担当者: kintone.fieldTypes.UserSelect;
    営業担当者: kintone.fieldTypes.UserSelect;
    のし画像: kintone.fieldTypes.File;
    その他画像: kintone.fieldTypes.File;
    刺繍画像: kintone.fieldTypes.File;
    デザイン画像: kintone.fieldTypes.File;
    タグ画像: kintone.fieldTypes.File;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    作成日時: kintone.fieldTypes.CreatedTime;
    更新日時: kintone.fieldTypes.UpdatedTime;
  }
}
