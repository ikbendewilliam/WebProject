/**
 * Created by ikbendewilliam on 10/05/2016.
 */

var colorChanger = {
	changeColor: function (element)
	{
		if (element.style.backgroundColor != "rgb(68, 68, 68)")
		{
			if (element.style.backgroundColor != "rgb(85, 204, 85)")
			{
				element.style.backgroundColor = "#5C5";
				//console.log(element.style.backgroundColor);
			}
			else
			{
				element.style.backgroundColor = "#2B2";
			}
		}
	}
};