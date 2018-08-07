from django.db import models
from django.utils.encoding import python_2_unicode_compatible

class TimeStampedModel(models.Model):
	time_block = models.DateTimeField()
	completed_at = models.DateTimeField(auto_now=True)

	class Meta:	# Define it as abstract class
		abstract = True

class Timeblock(TimeStampedModel):
    isCompleted = models.BooleanField()
    focused = models.BooleanField()