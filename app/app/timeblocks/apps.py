from django.apps import AppConfig


class TimeblocksConfig(AppConfig):
    name = 'app.timeblocks'

    verbose_name = "Timeblocks"

    def ready(self):
        """Override this to put in:
            Users system checks
            Users signal registration
        """
        pass