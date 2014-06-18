High Scores
===========

High Scores module for Python.
By Tj Ferry.

This module currently supports two main public functions:
+ `is_high_score(username, score)` will return True if this is the first score or the highest score for this user.  Otherwise False will be returned.  The `score` parameter should be numeric (int, long, float, etc.) and NOT a string.
+ `print_scores()` prints out a formatted list of all users with their high scores

To Do: 
- [ ] print_scores() should order the scores from highest to lowest.
- [ ] Move to a class-based implementation