/* 
 * 这个类用来处理下来列表
 */
//在一个列表框中加入一个项目
function list_add_item(theList,theText,theValue)
{
  var oNew = new Option(theText,theValue);
  theList.options.add(oNew);
}

//编辑列表框中选择中的一个项目
function list_edit_item(oList,theText,theValue)
{
  var cnt,idx;
  cnt = oList.options.length;
  for (idx = cnt - 1; idx >= 0; idx --)
  {
    oItem = oList.options[idx];
    if (oItem.selected)
    {
      oItem.text = theText;
      oItem.value= theValue;
      oItem.selected = true;
      break;
    }
  }
}

//判断列表中是否已经存在一个值
function list_exist_value(oList,theValue)
{
  var idx;

  for (idx = 0; idx < oList.options.length; idx ++)
  {
    var oItem = oList.options[idx];
    if (oItem.value == theValue) return true;
  }

  return false;
}

//取列表框中的所有值，以xxxxx分隔
function list_get_values(oList)
{
  var idx,values = "";

  for (idx = 0; idx < oList.options.length; idx ++)
  {
    var oItem = oList.options[idx];
    if (values == "")
      values += oItem.value;
    else
      values += "xxxxx" + oItem.value;
  }

  return values;
}

//取列表框中的所有值，以指定的字符分隔
function list_get_all_value(oList,sep)
{
  var idx,values = "";

  for (idx = 0; idx < oList.options.length; idx ++)
  {
    var oItem = oList.options[idx];
    if (values == "")
      values += oItem.value;
    else
      values += sep + oItem.value;
  }

  return values;
}
//取列表框中的所有值，以指定的字符分隔
function list_get_all_mc(oList,sep)
{
  var idx,values = "";

  for (idx = 0; idx < oList.options.length; idx ++)
  {
    var oItem = oList.options[idx];
    if (values == "")
      values += oItem.innerHTML;
    else
      values += sep + oItem.innerHTML;
  }

  return values;
}
//在一个列表框中加入另一个列表框中的所有的值
function list_add_all_from(oList,oFrom)
{
  var idx,cnt,found;

  for (idx = 0; idx < oFrom.options.length; idx ++)
  {
    var oItem = oFrom.options[idx];
    found = false;
    for (cnt = 0; cnt < oList.options.length; cnt ++)
    {
      if (oItem.text == oList.options[cnt].text &&
          oItem.value== oList.options[cnt].value)
      {
        found = true;
        break;
      }
    }
    if (false == found)
    {
      var oNew = new Option(oItem.text,oItem.value);
      oList.options.add(oNew);
    }
  }
}
//复制一个列表框中的所有项到另一个列表框
function list_clis_all_to(oList,oTo)
{
  var idx,cnt,found;

  for (idx = 0; idx < oList.options.length; idx ++)
  {
    var oItem = oList.options[idx];
    found = false;
    for (cnt = 0; cnt < oTo.options.length; cnt ++)
    {
      if (oItem.text == oTo.options[cnt].text &&
          oItem.value== oTo.options[cnt].value)
      {
        found = true;
        break;
      }
    }
    if (false == found)
    {
      var oNew = new Option(oItem.text,oItem.text);
      oTo.options.add(oNew);
    }
  }
}

//在一个列表框中加入另一个列表框中的选中的值
function list_add_sel_from(oList,oFrom)
{
  var idx,cnt,found;

  for (idx = 0; idx < oFrom.options.length; idx ++)
  {
    var oItem = oFrom.options[idx];
    if (false == oItem.selected) continue;
    found = false;
    for (cnt = 0; cnt < oList.options.length; cnt ++)
    {
      if (oItem.text == oList.options[cnt].text &&
          oItem.value== oList.options[cnt].value)
      {
        found = true;
        break;
      }
    }
    if (false == found)
    {
      var oNew = new Option(oItem.text,oItem.value);
      oList.options.add(oNew);
    }
  }
}

//移动一个列表框中的所有项到另一个列表框
function list_remove_all_to(oList,oTo)
{
  var idx,cnt,found;

  for (idx = 0; idx < oList.options.length; idx ++)
  {
    var oItem = oList.options[idx];
    found = false;
    for (cnt = 0; cnt < oTo.options.length; cnt ++)
    {
      if (oItem.text == oTo.options[cnt].text &&
          oItem.value== oTo.options[cnt].value)
      {
        found = true;
        break;
      }
    }
    if (false == found)
    {
      var oNew = new Option(oItem.text,oItem.value);
      oTo.options.add(oNew);
    }
  }

  oList.options.length=0;
}

//移动一个列表框中选中的项到另一个列表框
function list_remove_sel_to(oList,oTo)
{
  var idx,cnt,found;

  for (idx = 0; idx < oList.options.length; idx ++)
  {
    var oItem = oList.options[idx];
    if (false == oItem.selected) continue;
    found = false;
    for (cnt = 0; cnt < oTo.options.length; cnt ++)
    {
      if (oItem.text == oTo.options[cnt].text &&
          oItem.value== oTo.options[cnt].value)
      {
        found = true;
        break;
      }
    }
    if (false == found)
    {
      var oNew = new Option(oItem.text,oItem.value);
      oTo.options.add(oNew);
    }
  }

  cnt = oList.options.length;
  for (idx = cnt - 1; idx >= 0; idx --)
  {
    oItem = oList.options[idx];
    if (oItem.selected) oList.options[idx] = null;
  }
}

//清除列表框
function list_clear(oList)
{
  oList.options.length = 0;
}

//在列表框中删除选中的项
function list_remove_sel(oList)
{
  var cnt,idx;
  cnt = oList.options.length;
  for (idx = cnt - 1; idx >= 0; idx --)
  {
    oItem = oList.options[idx];
    if (oItem.selected) oList.options[idx] = null;
  }
}

//返回列表框中选中的项目
function list_get_sel_item(oList)
{
  var cnt,idx;
  cnt = oList.options.length;
  for (idx = cnt - 1; idx >= 0; idx --)
  {
    oItem = oList.options[idx];
    if (oItem.selected) return oItem;
  }
}

//在列表框中删除选中的项
function list_del_sel(oList)
{
  list_remove_sel(oList);
}

//列表框中选中的个数
function list_sel_count(oList)
{
  var cnt,idx,count=0;
  cnt = oList.options.length;
  for (idx = cnt - 1; idx >= 0; idx --)
  {
    oItem = oList.options[idx];
    if (oItem.selected) count ++;
  }

  return count;
}

//在列表框中选中所有的项
function select_all(oList)
{
  var idx;
  for (idx = 0; idx < oList.options.length; idx ++)
  {
    oList.options[idx].selected = true;
  }
}

//删除在另一个列表框中存在的项
function list_remove_by(oList,oBy)
{
  var idx,cnt;
  
  for (idx = 0;idx < oBy.options.length; idx++)
  {
    for (cnt = 0;cnt < oList.options.length; cnt ++)
    {
      var oItem = oList.options[cnt];
      var oItBy = oBy.options[idx];
      if (oItBy.value == oItem.value && oItBy.text == oItem.text) {
    	  oList.options[cnt] = null;
      }
    }
  }
}

