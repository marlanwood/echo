function echo()
{
  // ...
  var i, max = 0;
  for (i = 0; i < arguments.length; i++)
  {

	  console.log("'"+arguments[i]+"'");
//	  if (arguments[i] > max)
//	  {
//		  max  = arguments[i];
//          console.log(arguments[i]); 
//	  }
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
