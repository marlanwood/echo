<?php

function eecho()
{
  //print "hello";
  $numargs = func_num_args();
  $arg_list = func_get_args();
  for ($i = 0; $i < $numargs; $i++) {
        echo "'".$arg_list[$i]."'". "<br />\n";
  }
}
eecho();
eecho('bla');
eecho('foo', 'bar', 'baz');

?>